// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import fetch from 'node-fetch';
import stream from 'stream';
import { promisify } from 'util';

const pipeline = promisify(stream.pipeline);
const url = 'https://res.cloudinary.com/do7mb5ocb/image/upload/v1662287768/avatars/cv_emwmw7.webp';

const handler = async (req, res) => {
  const response = await fetch(url); // replace this with your API call & options
  if (!response.ok) throw new Error(`unexpected response ${response.statusText}`);

  res.setHeader('Content-Type', 'application/webp');
  res.setHeader('Content-Disposition', 'attachment; filename=nazmul.webp');
  await pipeline(response.body, res);
};

export default handler;
