import axios from 'axios'
import { createGlobalStyle } from 'styled-components'

export default async function cryptoNumbers(req, res) {
  const {
    query: { token },
  } = req

  const response = await axios.get(
    `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${token}&tsyms=USD`,
    {
      headers: {
        authorization:
          '42ea1b5d949b444915fd6d1175ddeefb495136d3dc01055131b84c8c2a86cfb6',
      },
    }
  )
  res.status(200).json({
    data: response.data,
  })
}
