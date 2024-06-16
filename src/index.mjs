import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { Amazon } from './plugins/Amazon_clouddrive.js';
import { AmdaHost } from './plugins/AmdaHost.js';
import { Anafast } from './plugins/Anafast.js';
import { AniStream } from './plugins/AniStream.js';
import { Archive } from './plugins/Archive.js';
import { Bitchute } from './plugins/Bitchute.js';
import { Brighteon } from './plugins/Brighteon.js';
import { Brplayer } from './plugins/Brplayer.js';
import { DailyMotion } from './plugins/DailyMotion.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const amazonRegex = new RegExp(process.env.AMAZON_REGEX);
const amdahostRegex = new RegExp(process.env.AMDAHOST_REGEX);
const anafast = new RegExp(process.env.ANAFAST_REGEX);
const anistream = new RegExp(process.env.ANISTREAM_REGEX);
const archive = new RegExp(process.env.ARCHIVE_REGEX);
const bitchute = new RegExp(process.env.BITCHUTE_REGEX);
const brighteon = new RegExp(process.env.BRIGHTEON_REGEX);
const brplayer = new RegExp(process.env.BRPLAYER_REGEX);
const dailymotion = new RegExp(process.env.DAILYMOTION_REGEX);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', async (req, res) => {
    const url = req.query.url;

    if (url) {
        if (amazonRegex.test(url)) {
            const result = await Amazon(url);
            res.send(result);
        } else if (anistream.test(url)) {
            const result = await AniStream(url);
            res.send(result);
        } else if (amdahostRegex.test(url)) {
            const result = await AmdaHost(url);
            res.send(result);
        } else if (anafast.test(url)) {
            const result = await Anafast(url);
            res.send(result);
        } else if (archive.test(url)) {
            const result = await Archive(url);
            res.send(result);
        } else if (bitchute.test(url)) {
            const result = await Bitchute(url);
            res.send(result);
        } else if (brighteon.test(url)) {
            const result = await Brighteon(url);
            res.send(result);
        } else if (brplayer.test(url)) {
            const result = await Brplayer(url);
            res.send(result);
        } else if (dailymotion.test(url)) {
            const result = await DailyMotion(url);
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
