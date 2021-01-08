export interface ISFlag {
  flag: boolean
}

export interface IEColor {
  colorId: number | 'RST'
  colorInfo?: boolean
  hexString: string
  rgb: object
  hsl: object
  name: string
}

export interface IPromptElem {
  id: number | null
  options: null
  text: string
  sequences: string
  code: string
  style: Array<string>
  bg: IEColor | undefined
  fg: IEColor | undefined
  type: string
}