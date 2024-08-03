import express from "express";
import { readFile } from "fs";
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

app.get("/jobs", (_, res) => {
    // readFile(join(__dirname, "../backend/jobs.json"), (err, data) => {
    //     if (err) {
    //         console.error(err);
    //         res.status(500).send("Internal Server Error");
    //         return;
    //     } else {
    //         res.json(data.toJSON());
    //     }
    // });
    res.sendFile(join(__dirname, "../backend/jobs.json"));
});

app.listen(port, () => console.log(`App listening on port ${port}!`));
