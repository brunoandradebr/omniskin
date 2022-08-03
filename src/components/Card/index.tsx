import axios from 'axios'

import { ISkin } from 'services/types/api'
import { useOmniskin } from 'stores/omniskin'

import { TbEye as InspectIcon, TbLock as LockIcon } from 'react-icons/tb'
import { RiComputerLine as ServerIcon } from 'react-icons/ri'

import { FloatMeter } from './FloatMeter'

import { Container } from './style'

interface IProps {
   skin: ISkin
}

export const Card = ({ skin }: IProps) => {
   const isFetching = useOmniskin((state) => state.isFetching)

   const handleInspectInServer = async (link: string) => {
      const { data: serverLink } = await axios.post(
         'https://api.csgoskins.gg/tests/link',
         { link }
      )
      if (serverLink.needs_to_connect === false) {
         location.href = 'steam://run/730'
      } else {
         location.href = serverLink.connect_to_url
      }
   }

   return (
      <Container className={`${isFetching ? '--is-loading' : ''}`}>
         {isFetching === false ? (
            <>
               <div className={'skin-imageContainer'}>
                  {skin.availableAt && (
                     <div className='skin-lock'>
                        <LockIcon />
                        {skin.availableAt}
                     </div>
                  )}
                  <a
                     className='skin-link'
                     title='open store link'
                     href={skin.store.skinUrl}
                     target='_blank'
                  >
                     <img className='skin-image' src={skin.image} />
                  </a>
                  <img
                     title={skin.store.name}
                     alt={skin.store.name}
                     className='skin-store'
                     src={skin.store.icon}
                  />
                  <a
                     className='skin-inspectGame'
                     href={skin.inspect}
                     title='Inspect in game'
                  >
                     <InspectIcon />
                  </a>
                  <a
                     onClick={handleInspectInServer.bind(this, skin.inspect)}
                     className='skin-inspectServer'
                     title='Inspect in server'
                  >
                     <ServerIcon />
                  </a>
               </div>

               <div className='skin-description'>
                  <div className='skin-name'>{skin.name}</div>

                  <FloatMeter float={skin.float} quality={skin.quality} />

                  <div className='skin-quality'>
                     <span title={String(skin.float)}>float</span>
                     {skin.quality && skin.float >= 0 ? (
                        <>
                           <b className={skin.quality}> {skin.quality}</b>
                           {''}
                           {String(skin.float).substring(0, 8)}
                        </>
                     ) : (
                        <> --- </>
                     )}
                  </div>

                  <div className='skin-pattern'>
                     <span>pattern</span>{' '}
                     {skin.pattern && skin.pattern >= 0
                        ? skin.pattern
                        : ' --- '}
                  </div>

                  <div className='skin-price'>
                     <span>price</span> {skin.priceFormated}
                  </div>
               </div>
            </>
         ) : null}
      </Container>
   )
}
