import app from "./app.js";


const port = 3000 || process.env.PORT;

app.listen(port, () => {
  console.log(`Aquisitions service is listening on port http://localhost:${port}`);
});

