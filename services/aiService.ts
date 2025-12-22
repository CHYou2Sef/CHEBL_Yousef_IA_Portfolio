import { GoogleGenerativeAI } from "@google/generative-ai";
import { SYSTEM_INSTRUCTION } from "../constants";
import { AIChatRole, ChatMessage } from "../types";

// Types for OpenAI-compatible providers
interface OpenAIResponse {
    choices: {
        message: {
            content: string;
        };
    }[];
    error?: {
        message: string;
    };
}

class AIService {
    private config = {
        provider: (import.meta.env.VITE_AI_PROVIDER?.toLowerCase().trim() || 'gemini') as 'gemini' | 'openai' | 'groq' | 'openrouter',
        apiKey: import.meta.env.VITE_API_KEY?.trim() || '',
        model: import.meta.env.VITE_AI_MODEL?.trim() || '',
        baseUrl: import.meta.env.VITE_AI_BASE_URL?.trim() || ''
    };

    private geminiClient: GoogleGenerativeAI | null = null;

    constructor() {
        console.log(`[AI Service] Initializing with provider: ${this.config.provider}, model: ${this.config.model || 'default'}`);
        if (this.config.provider === 'gemini' && this.config.apiKey) {
            this.geminiClient = new GoogleGenerativeAI(this.config.apiKey);
        }
    }

    async sendMessage(history: ChatMessage[], message: string): Promise<string> {
        if (!this.config.apiKey) {
            return "Error: API Key is missing in your configuration.";
        }

        // Smart Detection: If VITE_AI_PROVIDER is missing or gemini, but the key starts with gsk_, force groq.
        let activeProvider = this.config.provider;
        if (this.config.apiKey.startsWith('gsk_') && activeProvider === 'gemini') {
            console.log("[AI Service] Detected Groq key prefix, switching provider to groq.");
            activeProvider = 'groq';
        }

        try {
            switch (activeProvider) {
                case 'gemini':
                    return await this.sendGemini(history, message);
                case 'groq':
                case 'openrouter':
                case 'openai':
                    return await this.sendOpenAICompatible(history, message, activeProvider);
                default:
                    return "Error: Unsupported AI provider configured.";
            }
        } catch (err: any) {
            console.error(`AI Service Error (${activeProvider}):`, err);
            return `Error: ${err.message || 'An unexpected error occurred while communicating with the AI.'}`;
        }
    }

    private async sendGemini(history: ChatMessage[], message: string): Promise<string> {
        if (!this.geminiClient) {
            this.geminiClient = new GoogleGenerativeAI(this.config.apiKey);
        }

        const model = this.geminiClient.getGenerativeModel({
            model: this.config.model || 'gemini-flash-latest',
            systemInstruction: SYSTEM_INSTRUCTION
        });

        // Gemini requires history to start with a 'user' message
        const geminiHistory = history
            .map(m => ({
                role: m.role === 'user' ? 'user' : 'model' as any,
                parts: [{ text: m.text }]
            }));

        // Filter out any leading model messages if the first actually useful message is not user
        let startIndex = 0;
        while (startIndex < geminiHistory.length && geminiHistory[startIndex].role !== 'user') {
            startIndex++;
        }

        const chat = model.startChat({
            history: geminiHistory.slice(startIndex),
            generationConfig: {
                temperature: 0.7,
            },
        });

        const result = await chat.sendMessage(message);
        const response = await result.response;
        return response.text();
    }

    private async sendOpenAICompatible(history: ChatMessage[], message: string, providerOverride?: string): Promise<string> {
        const activeProvider = providerOverride || this.config.provider;
        let baseUrl = this.config.baseUrl;
        let model = this.config.model;

        // Default configuration for popular providers
        if (activeProvider === 'groq') {
            baseUrl = baseUrl || 'https://api.groq.com/openai/v1';
            model = model || 'llama-3.3-70b-versatile';
        } else if (this.config.provider === 'openrouter') {
            baseUrl = baseUrl || 'https://openrouter.ai/api/v1';
            model = model || 'google/gemini-2.0-flash-exp:free';
        } else if (this.config.provider === 'openai') {
            baseUrl = baseUrl || 'https://api.openai.com/v1';
            model = model || 'gpt-4o-mini';
        }

        const messages = [
            { role: 'system', content: SYSTEM_INSTRUCTION },
            ...history.map(m => ({
                role: m.role === 'model' ? 'assistant' : m.role,
                content: m.text
            })),
            { role: 'user', content: message }
        ];

        const response = await fetch(`${baseUrl}/chat/completions`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.config.apiKey}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.origin, // Required for OpenRouter
                'X-Title': 'Youssef Portfolio AI'
            },
            body: JSON.stringify({
                model: model,
                messages: messages,
                temperature: 0.7,
            })
        });

        const data: OpenAIResponse = await response.json();

        if (data.error) {
            throw new Error(data.error.message);
        }

        return data.choices[0].message.content;
    }

    getProviderName(): string {
        const names = {
            'gemini': 'Google Gemini',
            'groq': 'Groq (Llama)',
            'openrouter': 'OpenRouter',
            'openai': 'OpenAI'
        };
        return names[this.config.provider] || 'AI Agent';
    }
}

export const aiService = new AIService();
