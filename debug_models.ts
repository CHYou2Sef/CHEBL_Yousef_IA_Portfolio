import { GoogleGenerativeAI } from "@google/generative-ai";
import "dotenv/config";

const apiKey = process.env.VITE_API_KEY || process.env.API_KEY;

if (!apiKey) {
    console.error("API Key not found");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function check() {
    try {
        const list = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" }).listModels();
        console.log("Available Models:");
        list.models.forEach(m => console.log(m.name));
    } catch (err: any) {
        console.error("SDK Error:", err.message);

        // Manual fetch as fallback
        try {
            const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`);
            const data = await resp.json();
            if (data.models) {
                console.log("REST API Models:");
                data.models.forEach((m: any) => console.log(m.name));
            } else {
                console.log("REST API returned no models:", data);
            }
        } catch (e: any) {
            console.error("REST Fetch Error:", e.message);
        }
    }
}

check();
