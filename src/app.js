import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.status(200).send('Aquisitions Service is up and running!');
})

export default app;