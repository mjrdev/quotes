import axios from "axios";
import { coins } from './coins';
import type { Coin, Current } from './coins';
export default class Quotes {
  private url: string;
  private coins: object[];
  public cache: object[];
  private pairDefault: string

  constructor(url: string, pair: string='usd-brl') {
    this.url = url;
    this.coins = coins;
    this.cache = [];
    this.pairDefault = pair;
  }

  private default(pair: string ='usd-brl'): any {
    const quota = this.cache.find((q: any) => {
      return q.pair
    });
    
    return false
  }

  public async quota(pair: string='usd-brl'): Promise<any> {

    const next = this.default();
    if(next !== false) {
      return next
    }

    let url = this.url;

    async function getQuota(): Promise<any> {
      try {
        const response = axios.get(url+pair);

        return response;
      } catch(err: any) {
        console.error('ocorreu um erro na api: ', err.message);

        return err
      }
    }

    const quota: any = await getQuota();
    quota.data.pair = pair;
    this.cache.push(quota.data);

    return quota.data
  }
}