import axios from "axios";
import type { Coin, Current } from './coins';

export default async function (coin1: Coin, coin2: Coin): Promise<any> {
  try {
    const get = await axios.get('https://economia.awesomeapi.com.br/json/last/usd-brl');
    console.log(get);
    
    return get
  } catch (err: any) {
    console.error('ocorreu um erro ao consultar api: ', err.message)
  }
}