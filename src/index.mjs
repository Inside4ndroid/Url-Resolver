import dotenv from 'dotenv';
import express from 'express';
import { Amazon } from './plugins/Amazon_clouddrive.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const amazonRegex = new RegExp(process.env.AMAZON_REGEX);

app.get('/', async (req, res) => {
    const url = req.query.url;
    if (url) {
        if (amazonRegex.test(url)) {
            try {
                const result = await Amazon(url);
                res.send(result);
            } catch (error) {
                res.status(500).send({ error: error.message });
            }
        } else {
            res.send('ERROR 01');
        }
    } else {
        res.send('ERROR 02');
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
