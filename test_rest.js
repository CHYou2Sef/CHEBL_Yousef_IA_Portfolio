const apiKey = "AIzaSyBHgdQoEjrM6XClJP9nnfiDnzcw4GRpQ0M";

async function listModels() {
    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`);
        const data = await response.json();
        console.log("Models (v1):", data);

        const responseBeta = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
        const dataBeta = await responseBeta.json();
        console.log("Models (v1beta):", dataBeta);
    } catch (err) {
        console.error("Fetch error:", err);
    }
}

listModels();
