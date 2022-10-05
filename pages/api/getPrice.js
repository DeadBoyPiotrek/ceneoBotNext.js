import { replacePhotos } from '../../mongodb/dbFunctions';
import { getPrice } from '../../puppeteer/puppeteerFunctions';
const handler = async (req, res) => {
  const photos = await getPrice(req, res);
  await replacePhotos(photos);
  res
    .status(200)
    .json({ name: ' I guess, puppeteer and mongodb worked somehow 😮' });
};

export default handler;
