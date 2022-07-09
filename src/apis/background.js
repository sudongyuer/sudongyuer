const axios = require("axios");

const bingUrl = 'https://www.bing.com'
const baseURL = 'https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1';

const getBackground = async () => {
  const res = await axios.request({
    method: 'GET',
    baseURL,
  })

  const [image] = res.data.images;

  console.log('background', image);

  return `${bingUrl}${image.url}`;
}

module.exports = getBackground;
