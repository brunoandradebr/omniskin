import { ISkin } from 'services/types/api'

import { Container } from './style'

interface IProps {
   skin: ISkin
}

export const Card = ({ skin }: IProps) => {
   return (
      <Container>
         <div className='skin-imageContainer'>
            <img className='skin-image' src={skin.image} />
            <img
               title={skin.store.name}
               alt={skin.store.name}
               className='skin-store'
               src={skin.store.icon}
            />
         </div>
         <div className='skin-description'>
            <div className='skin-name'>{skin.name}</div>
            <div className='skin-quality'>
               <span>float</span> <b>{skin.quality}</b> /{' '}
               {Number(skin.float).toFixed(4)}
            </div>
            <div className='skin-pattern'>
               <span>pattern</span> {skin.pattern}
            </div>
            <div className='skin-price'>
               <span>price</span> {skin.priceFormated}
            </div>
         </div>
      </Container>
   )
}
