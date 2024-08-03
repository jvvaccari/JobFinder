import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const app = express();
const port = 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, "../")));
app.use(express.static(join(__dirname, "../frontend")));

app.get("/", (req, res) => {
    const filePath = join(__dirname, "../frontend/index.html");
    res.sendFile(filePath);
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
