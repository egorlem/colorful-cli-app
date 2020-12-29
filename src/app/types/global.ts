export interface ISFlag {
  flag: boolean
}

interface IEColor {
  colorInfo: boolean
  hexString: string
  rgb: object
  hsl: object
  name: string
}

export interface IPromptElem {
  options: null
  id: number | null
  text: string
  sequences: string
  code: string
  style: Array<string>
  bg: IEColor
  fg: IEColor
}