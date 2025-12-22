# Youssef Chebl - AI Portfolio

This is a modern, high-performance personal portfolio website featuring a dark glassmorphism aesthetic and an integrated **Universal AI Assistant** that can be powered by any major AI provider.

## 🚀 Features

- **Universal AI Chat**: Decoupled AI backend supporting:
  - **Google Gemini** (1.5 Flash, 2.0 Flash, etc.)
  - **Groq** (Llama 3, Mixtral)
  - **OpenRouter** (Unified access to 200+ models)
  - **OpenAI** (GPT-4o mini, etc.)
- **Adaptive Persona**: The AI maintains Youssef's professional persona regardless of the provider selected.
- **Responsive & Modern**: Built with a sleek blue/dark aesthetic using Vanilla CSS.
- **Data-Driven**: All CV data is centralized in `constants.ts` for easy updates.

## 🛠️ Installation & Setup

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Configure Environment Variables**:
    Create a `.env.local` file in the root directory:
    ```env
    # Generic API Key used for the selected provider
    VITE_API_KEY=your_api_key_here

    # Choose your brain: gemini, groq, openrouter, or openai
    VITE_AI_PROVIDER=gemini
    
    # Specific model ID (e.g., gemini-flash-latest, llama-3.3-70b-versatile)
    VITE_AI_MODEL=gemini-flash-latest
    ```

3.  **Run Development Server**:
    ```bash
    npm run dev
    ```

## 🧠 Customization

- **AI Knowledge**: Update the `SYSTEM_INSTRUCTION` in `constants.ts` to change how the AI represents you.
- **CV Data**: Edit the arrays in `constants.ts` (Projects, Experience, Skills, Certifications).
- **Styles**: Modify `index.css` for global themes or individual component styles.

## 📦 Technology Stack

- **Frontend**: React 18, Vite, TypeScript
- **AI Integration**: Google Generative AI SDK + Unified Fetch Adapters
- **Icons**: Lucide React
- **Backgrounds**: Custom Particle & CSS Gradient animations
