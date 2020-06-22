import express from "express";
import path from "path";

import React from "react";
import { renderToString } from "react-dom/server";


import App from "../src/client/App";
import Html from "../src/client/Html";
import { ServerStyleSheet } from 'styled-components';


const PORT = 5000;

const app = express();

// app.get('/getNews', async (req, res) => {
//   console.log('something');
//   // const result = await fetch(`https://hn.algolia.com/api/v1/search?page=1`);
//   res.send('something');
// });

app.use("^/$", (req, res, next) => {
  const sheet = new ServerStyleSheet();

  const body = renderToString(sheet.collectStyles(<App />));
  const styles = sheet.getStyleTags();
  const title = 'Hacker New Assignment';

  res.send(
    Html({
      body,
      styles,
      title
    })
  );
});

app.use(express.static(path.resolve(__dirname, '..', 'build')))

app.listen(PORT, () => {
  console.log(`App launched on ${PORT}`);
});
