import express from 'express';

export const MiddleWares = {
    static: express.static,
    json: express.json,
    urlencoded: express.json,
    query: express.query,
    text: express.text,
    raw: express.raw
}
