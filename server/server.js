const express = require('express')
const app = express()

const cohere = require('cohere-ai');
cohere.init('Bp6duAksIMB2gIc6jav5RuhUlHvMJomTp1R2X1hz'); // This is your trial API key

app.get("/api", (req,res) => {
    (async () => {
    const response = await cohere.generate({
        model: 'command-xlarge-beta',
        prompt: 'Generate a Satire-style poem that has 3 paragraphs, which is the poem dedicated to my partner Laura, where her name Laura appears in the poem',
        max_tokens: 122,
        temperature: 1.5,
        k: 0,
        stop_sequences: [],
        return_likelihoods: 'NONE'
    });
        console.log(response.generations)
        res.json(response.body.generations[0].text)
    })();
})

app.listen(5000, () => {console.log("Server started on port 5000")})