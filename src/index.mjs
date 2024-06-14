import dotenv from 'dotenv';
import express from 'express';
import { Amazon } from './plugins/Amazon_clouddrive.js';
import { AmdaHost } from './plugins/AmdaHost.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const amazonRegex = new RegExp(process.env.AMAZON_REGEX);
const amdahostRegex = new RegExp(process.env.AMDAHOST_REGEX);

app.get('/', async (req, res) => {
    const url = req.query.url;
    if (url) {
        if (amazonRegex.test(url)) {
            const result = await Amazon(url);
            res.send(result);
        } else if(amdahostRegex.test(url)){
            const result = await AmdaHost(url);
            res.send(result);
        } else {
            const data = {
                Error: 'ERROR: 0x0001'
            };
            res.send({ data: data });
        }
    } else {
        const data = {
            Error: 'ERROR: 0x0002'
        };
        res.send({ data: data });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
