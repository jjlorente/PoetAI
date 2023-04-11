const express = require('express')
const app = express()
const cohere = require('cohere-ai')



require('dotenv').config()
const cohereApiKey = process.env.COHERE_API_KEY;
cohere.init(cohereApiKey)

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/api/poems", (req,res) => {
    const poemType = req.body['poemType'];
    const dedicatedTo = req.body['dedicated'];
    const description = req.body['descriptionPoem'];

    (async () => {
        const response = await cohere.generate({
            model: 'command-xlarge-beta',
            prompt: `Escribe un poema ${poemType}. Este tipo de poema es ${description}, lo que significa que debe tener ciertas características propias del tipo de poema seleccionado. Además, el poema debe estar dedicado a ${dedicatedTo}, y su nombre debe aparecer en el poema.`,
            max_tokens: 200,
            temperature: 1.5,
            k: 0,
            stop_sequences: [],
            return_likelihoods: 'NONE'
        });
            res.json(response.body.generations[0].text)
    })();
})

app.listen(5000, () => {console.log("Server started on port 5000")})