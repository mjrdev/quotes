export const coins = [
  {
    name: "Real", sigla: "BRL", defaultValue: 1.00
  },
  {
    name: "Dolar", sigla: "USD", defaultValue: 1.00
  }
]

export type Coin = {
  name: string, sigla: string, defaultValue: number
}

export type Current = {
  value: number
}