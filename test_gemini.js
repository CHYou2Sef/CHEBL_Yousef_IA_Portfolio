const apiKey = "AIzaSyBHgdQoEjrM6XClJP9nnfiDnzcw4GRpQ0M";

async function listModels() {
    try {
        const responseBeta = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const dataBeta = await responseBeta.json();
        if (dataBeta.models) {
            console.log("Gemini Models (v1beta):");
            dataBeta.models
                .filter(m => m.name.includes('gemini'))
                .forEach(m => console.log(`- ${m.name} (${m.displayName})`));
        } else {
            console.log("No models found in v1beta:", dataBeta);
        }
    } catch (err) {
        console.error("Fetch error:", err);
    }
}

listModels();
