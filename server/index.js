import express from 'express';
import { dirname,join } from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = 8080;
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, '../public')));

app.get('/', (req, res) => {
    const filePath = join(__dirname,"../index.html");
    res.sendFile(filePath);
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));