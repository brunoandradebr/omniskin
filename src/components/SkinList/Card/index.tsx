import axios from 'axios'

import { ISkin } from 'services/types/api'
import { useOmniskin } from 'stores/omniskin'

import { TbEye as InspectIcon, TbLock as LockIcon } from 'react-icons/tb'

import { FloatMeter } from './FloatMeter'

import { Container } from './style'

import csmoneyLogo from './../../SkinSearch/StoreFilter/assets/csmoney.ico'
import dmarketLogo from './../../SkinSearch/StoreFilter/assets/dmarket.ico'
import neshaLogo from './../../SkinSearch/StoreFilter/assets/nesha.png'
import dashLogo from './../../SkinSearch/StoreFilter/assets/dash.png'

const storeIcons = {
  csmoney: csmoneyLogo,
  dmarket: dmarketLogo,
  neshastore: neshaLogo,
  dashskins: dashLogo,
}

interface IProps {
  skin: ISkin
}

export const Card = ({ skin }: IProps) => {
  const isFetching = useOmniskin(state => state.isFetching)

  const handleInspectInServer = async (link: string) => {
    const { data: serverLink } = await axios.post('https://api.csgoskins.gg/tests/link', {
      link,
    })
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
              <div className="skin-lock">
                <LockIcon />
                {skin.availableAt}
              </div>
            )}
            <a className="skin-link" title="open store link" href={skin.store.skinUrl} target="_blank">
              <img className="skin-image" src={skin.image} />
              <img className="skin-imageShadow" src={skin.image} />
            </a>
            <img
              title={skin.store.name}
              alt={skin.store.name}
              className="skin-store"
              src={storeIcons[skin.store.name as keyof typeof storeIcons]}
            />

            <div className="skin-stickers">
              {skin.stickers?.map((sticker, key) => (
                <img
                  key={`${sticker.name}-${key}`}
                  className="skin-sticker"
                  alt={sticker.name}
                  title={sticker.name}
                  src={sticker.image}
                />
              ))}
            </div>

            <a className="skin-inspectGame" href={skin.inspect} title="Inspect in game">
              <InspectIcon />
            </a>
          </div>

          <div className="skin-description">
            <div className="skin-name">{skin.name}</div>

            <FloatMeter float={skin.float} quality={skin.quality} />

            <div className="skin-quality">
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

            <div className="skin-pattern">
              <span>pattern</span> {skin.pattern && skin.pattern >= 0 ? skin.pattern : ' --- '}
            </div>

            <div className="skin-price">
              <span>price</span> {skin.priceFormated}
            </div>
          </div>
        </>
      ) : null}
    </Container>
  )
}
