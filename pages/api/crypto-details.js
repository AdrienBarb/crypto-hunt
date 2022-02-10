import axios from "axios";
import { createGlobalStyle } from "styled-components";

export default async function cryptoDetails(req, res) {
  const {
    query: { token },
  } = req;

  console.log('Server side : ', token)

  const response = await axios.get(
    "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info",
    {
      headers: {
        "X-CMC_PRO_API_KEY": "c7b7b8f0-38b4-4ad3-a0ae-b6bc6e459e06",
      },
      params:{
        symbol: token
      }
    }
  );
  res.status(200).json({
    data: response.data,
  });
}
