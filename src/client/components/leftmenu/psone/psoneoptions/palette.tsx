import React, { useMemo } from 'react'
import { ColorElement, PaletteWrapper, RangeWrapper } from './palette.styled'

interface IPaletteProps {
  globalcolors: any
  colorHandler: any
  flag: boolean
}

const Palette = (props: IPaletteProps): JSX.Element => {
  const { globalcolors, flag, colorHandler } = props

  const paletteHantler = (event: any) => {
    const curColor = globalcolors.find(
      (elm: any) => +event.target.id === +elm.colorId
    )
    colorHandler(curColor)
  }
  console.dir(React)
  /**
   * @ETENTION globalcolor is area variable not from state
   * @fix drop error in server offline
   */
  const colorslist = useMemo(() => {
    //  let globalcolors = [1]
    return globalcolors.map((e: any) => {
      return (
        <ColorElement
          onClick={paletteHantler}
          id={e.colorId}
          key={e.colorId}
          color={e.hexString}
        ></ColorElement>
      )
    })
  }, [globalcolors])
  return (
    <PaletteWrapper flag={flag}>
      <RangeWrapper color={'#0d74db'}>{colorslist}</RangeWrapper>
    </PaletteWrapper>
  )
}
export default React.memo(Palette)
