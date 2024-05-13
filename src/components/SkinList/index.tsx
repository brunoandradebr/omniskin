import React from 'react'

import { useOmniskin } from 'stores/omniskin'

import { Card } from './Card'

import { Container } from './style'

export const SkinList = () => {
  const listSeparatorRef = React.useRef<HTMLDivElement>(null)

  const isFetching = useOmniskin(state => state.isFetching)
  const params = useOmniskin(state => state.params)
  const setParams = useOmniskin(state => state.setParams)
  const fetchSkins = useOmniskin(state => state.fetch)
  const resultTotal = useOmniskin(state => state.resultTotal)
  const skinList = useOmniskin(state => state.skins)

  React.useEffect(() => {
    if (isFetching === false && listSeparatorRef.current) {
      const y =
        listSeparatorRef.current.getBoundingClientRect().top + window.pageYOffset - 30
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [isFetching])

  React.useEffect(() => {
    if (isFetching === false && params.page && resultTotal > 0) fetchSkins(params, true)
  }, [params])

  const handleLoadMore = () => {
    setParams({
      page: Number(params.page) + 1,
    })
  }

  return (
    <Container>
      {skinList &&
        skinList.map((skin, index) => (
          <React.Fragment key={skin.id}>
            {Number(params.page) > 0 && index === skinList.length - resultTotal && (
              <div ref={listSeparatorRef} className="list-separator" />
            )}
            <Card key={skin.id} skin={skin} />
          </React.Fragment>
        ))}

      {isFetching === false &&
        (resultTotal > 0 ? (
          <button onClick={handleLoadMore}>load more</button>
        ) : (
          <div className="list-separator --is-end" />
        ))}
    </Container>
  )
}
