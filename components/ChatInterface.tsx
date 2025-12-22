import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sparkles, XCircle, Loader2, Copy, RefreshCw, Check, AlertTriangle, ArrowUp } from 'lucide-react';
import { aiService } from '../services/aiService';
import { ChatMessage } from '../types';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: "Hi there! I'm Youssef's AI Assistant. \n\nI'm here to help you explore his portfolio. You can ask me about his **projects**, **skills**, or his **internship experience**. What would you like to know?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [isConfigured, setIsConfigured] = useState(true);

  const suggestions = [
    "Summary of experience",
    "Top technical skills",
    "Details on the AI Project",
    "Contact information"
  ];

  useEffect(() => {
    // Check if API key is present
    const apiKey = import.meta.env.VITE_API_KEY || process.env.API_KEY;

    if (!apiKey) {
      setIsConfigured(false);
      setError("API Key Missing");
      setMessages(prev => [
        ...prev,
        {
          role: 'model',
          text: "⚠️ **System Alert: API Key Missing**\n\nTo enable this AI assistant, you need to configure an AI API Key.\n\n1. Create a `.env` file in the project root.\n2. Add: `VITE_API_KEY=your_actual_key` (or Gemini Key)\n3. Restart the application.\n\nPlease refer to the **README.md** for detailed setup instructions.",
          isError: true
        }
      ]);
    }
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim()) return;

    if (!textOverride) {
      setInput('');
    }

    // Add user message
    const updatedMessages = [...messages, { role: 'user', text: textToSend } as ChatMessage];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      const responseText = await aiService.sendMessage(messages, textToSend);
      setMessages(prev => [...prev, { role: 'model', text: responseText, isError: responseText.startsWith('Error:') }]);
    } catch (err: any) {
      setMessages(prev => [...prev, { role: 'model', text: `Error: ${err.message}`, isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleRegenerate = async () => {
    if (isLoading) return;

    // Find the last user message
    const lastUserMessage = [...messages].reverse().find(m => m.role === 'user');
    if (!lastUserMessage) return;

    // Optimistically remove the last model message if it exists to simulate "regenerating"
    setMessages(prev => {
      if (prev[prev.length - 1].role === 'model') {
        return prev.slice(0, -1);
      }
      return prev;
    });

    // Re-send the last user text
    await handleSend(lastUserMessage.text);
  };

  // Helper function to render text with basic markdown-like formatting
  const renderMessageContent = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, i) => {
      // Bold text parsing: **text**
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const isListItem = line.trim().startsWith('- ') || line.trim().startsWith('• ');

      return (
        <div key={i} className={`min-h-[1.5em] ${isListItem ? 'pl-4 relative' : 'mb-1'}`}>
          {isListItem && <span className="absolute left-0 top-0">•</span>}
          {parts.map((part, j) => {
            if (part.startsWith('**') && part.endsWith('**')) {
              return <strong key={j} className="font-bold text-slate-900 dark:text-white">{part.slice(2, -2)}</strong>;
            }
            return <span key={j}>{isListItem ? part.replace(/^[-•]\s/, '') : part}</span>;
          })}
        </div>
      );
    });
  };

  return (
    <div className="w-full bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-2xl overflow-hidden flex flex-col h-[600px] transition-colors duration-300">

      {/* Modern Header */}
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${isConfigured ? 'bg-green-500 animate-pulse' : 'bg-amber-500'}`} />
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Youssef's AI Assistant <Sparkles size={14} className="text-blue-500" />
            </h3>
            <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">Powered by {aiService.getProviderName()}</span>
          </div>
        </div>
        {error && (
          <div title={error} className="text-red-500 cursor-help bg-red-50 dark:bg-red-900/20 p-1.5 rounded-full">
            <XCircle size={18} />
          </div>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-50 dark:bg-slate-950/50 scroll-smooth">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-start gap-3`}>

              {/* Avatar */}
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center shadow-sm ${msg.role === 'user' ? 'bg-indigo-600' :
                msg.isError ? 'bg-red-100' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'
                }`}>
                {msg.role === 'user' ? <User size={14} className="text-white" /> :
                  msg.isError ? <AlertTriangle size={14} className="text-red-600" /> :
                    <Bot size={16} className="text-blue-600 dark:text-blue-400" />
                }
              </div>

              {/* Message Bubble */}
              <div
                className={`group relative px-5 py-3.5 text-sm leading-relaxed shadow-sm ${msg.role === 'user'
                  ? 'bg-indigo-600 text-white rounded-2xl rounded-tr-sm'
                  : msg.isError
                    ? 'bg-red-50 text-red-800 border border-red-200 rounded-2xl'
                    : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-2xl rounded-tl-sm border border-slate-200 dark:border-slate-700'
                  }`}
              >
                <div className="prose prose-sm dark:prose-invert max-w-none">
                  {renderMessageContent(msg.text)}
                </div>

                {/* Toolbar */}
                {msg.role === 'model' && !msg.isError && (
                  <div className="absolute -bottom-6 left-0 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <button
                      onClick={() => handleCopy(msg.text, idx)}
                      className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                      title="Copy"
                    >
                      {copiedIndex === idx ? <Check size={12} className="text-green-500" /> : <Copy size={12} />}
                    </button>
                    {idx === messages.length - 1 && !isLoading && isConfigured && (
                      <button
                        onClick={handleRegenerate}
                        className="p-1 text-slate-400 hover:text-blue-500 transition-colors"
                        title="Regenerate"
                      >
                        <RefreshCw size={12} />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Thinking Indicator */}
        {isLoading && (
          <div className="flex justify-start animate-in fade-in duration-300">
            <div className="flex flex-row items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center shadow-sm">
                <Bot size={16} className="text-blue-600 dark:text-blue-400" />
              </div>
              <div className="bg-white dark:bg-slate-800 px-4 py-3 rounded-2xl rounded-tl-sm border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
        {/* Suggestions */}
        {messages.length < 3 && !isLoading && (
          <div className="flex gap-2 overflow-x-auto pb-3 mb-1 no-scrollbar">
            {suggestions.map((sug, i) => (
              <button
                key={i}
                onClick={() => handleSend(sug)}
                className="whitespace-nowrap px-3 py-1.5 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
              >
                {sug}
              </button>
            ))}
          </div>
        )}

        <div className="relative flex items-center bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 focus-within:border-blue-400 dark:focus-within:border-blue-500/50 focus-within:ring-1 focus-within:ring-blue-400 dark:focus-within:ring-blue-500/50 transition-all shadow-inner dark:shadow-none">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder={isConfigured ? "Ask anything..." : "Configuration required"}
            disabled={!isConfigured || isLoading}
            className="w-full bg-transparent text-slate-900 dark:text-slate-200 rounded-2xl pl-4 pr-12 py-4 focus:outline-none placeholder-slate-400 dark:placeholder-slate-600 disabled:opacity-50 text-sm"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || !isConfigured || isLoading}
            className={`absolute right-2 p-2 rounded-xl transition-all duration-200 ${input.trim() && !isLoading
              ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-md'
              : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
              }`}
          >
            {isLoading ? <Loader2 size={18} className="animate-spin" /> : <ArrowUp size={18} />}
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-400 dark:text-slate-600 mt-2">
          AI can make mistakes. Check important info.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;