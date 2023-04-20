const { Configuration, OpenAIApi } = require("openai");
const { encode } = require('gpt-3-encoder')

const configuration = new Configuration({
    organization: "",
    apiKey: "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",
});
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
        console.log('Cantidad de tokens en el prompt: ', encoded.length)
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

generateText();
