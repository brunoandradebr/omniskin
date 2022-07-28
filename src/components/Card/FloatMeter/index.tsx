interface IFloatMeterProps {
   float: number
   quality: string
}

import { RiPriceTagFill as IndicatorIcon } from 'react-icons/ri'

import { Container } from './style'

export const FloatMeter = (props: IFloatMeterProps) => {
   return (
      <Container
         style={{
            filter: `${
               props.float && props.quality ? 'saturate(1)' : 'saturate(0)'
            }`,
         }}
      >
         <div className='bar fn'></div>
         <div className='bar mw'></div>
         <div className='bar ft'></div>
         <div className='bar ww'></div>
         {props.float && props.quality && (
            <div
               className='bar-indicator'
               style={{ left: `calc(${100 * props.float}% - (16px / 2))` }}
            >
               <IndicatorIcon />
            </div>
         )}
         <div className='bar bs'></div>
      </Container>
   )
}
