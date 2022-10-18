// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fetch from 'node-fetch';
import stream from 'stream';
import { promisify } from 'util';

const pipeline = promisify(stream.pipeline);
const url = 'http://www.keepandshare.com/doc10/view.php?id=35987&da=y';

const handler = async (req, res) => {
  const response = await fetch(url); // replace this with your API call & options
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=nazmul.pdf');
  await pipeline(response.body, res);
};

export default handler;
