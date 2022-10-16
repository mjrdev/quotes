export const coins = [
  {
    name: "Real", sigla: "BRL", defaultValue: 1.00, symbol: "R$"
  },
  {
    name: "Dolar", sigla: "USD", defaultValue: 1.00, symbol: "US$"
  },
  {
    name: "Euro", sigla: "EUR", defaultValue: 1.00, symbol: "€"
  },
  {
    name: "Bitcoin", sigla: "BTC", defaultValue: 1.00, symbol: "₿"
  }
]

export type Coin = {
  name: string, sigla: string, defaultValue: number, symbol: string
}

export type Current = {
  value: number
}