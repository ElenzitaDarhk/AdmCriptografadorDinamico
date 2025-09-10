export type ConfigurationType = Configuration
export type AlgorithmType = Algorithm

export interface Configuration {
  id: number
  algorithm: Algorithm
  appClient: AppClient
  enable: boolean
  initialDate: string
  keyWord: string
  updateDate: string
}

export interface Algorithm {
  id: number
  name: string
}

export interface AppClient {
  id: number
  name: string
}
