import dotenv from 'dotenv';
import express from 'express';
import { Amazon } from './plugins/Amazon_clouddrive.js';
import { AmdaHost } from './plugins/AmdaHost.js';
import { Anafast } from './plugins/Anafast.js';
import { AniStream } from './plugins/AniStream.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const amazonRegex = new RegExp(process.env.AMAZON_REGEX);
const amdahostRegex = new RegExp(process.env.AMDAHOST_REGEX);
const anafast = new RegExp(process.env.ANAFAST_REGEX);
const anistream = new RegExp(process.env.ANISTREAM_REGEX);

app.get('/', async (req, res) => {
    const url = req.query.url;
    if (url) {
        if (amazonRegex.test(url)) {
            const result = await Amazon(url);
            res.send(result);
        } else if(anistream.test(url)){
            const result = await AniStream(url);
            res.send(result);
        } else if(amdahostRegex.test(url)){
            const result = await AmdaHost(url);
            res.send(result);
        } else if(anafast.test(url)){
            const result = await Anafast(url);
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
