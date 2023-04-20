require('dotenv').config();
const { Configuration, OpenAIApi } = require("openai");
const { encode } = require('gpt-3-encoder')

const configuration = new Configuration({
    organization: "",
    apiKey: `${process.env.API_KEY}`,
});
console.log("KEY: " + configuration.apiKey);
const openai = new OpenAIApi(configuration);

async function generateText() {
    try {
        const prompt = `Necesito un resumen del diario La Nacion en 100 caracteres`;
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0,
            max_tokens: 100,
            presence_penalty: 0,
            frequency_penalty: 0
        });
        const encoded = encode(prompt)
        console.log(`Cantidad de tokens en el prompt:${encoded.length}`);
        console.log(`Resumen:${response.data.choices[0].text}`);
    } catch (error) {
        console.error(error);
    }
}

generateText();
