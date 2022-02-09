import axios from "axios";

export default async function users(req, res) {
  const {
    query: { firstName, lastName },
  } = req;

  const response = await axios.get(
    "https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest",
    {
      headers: {
        "X-CMC_PRO_API_KEY": "c7b7b8f0-38b4-4ad3-a0ae-b6bc6e459e06",
      },
    }
  );
  res.status(200).json({
    data: response.data,
  });
}
