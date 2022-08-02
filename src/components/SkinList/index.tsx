import React from 'react'

import { useOmniskin } from 'stores/omniskin'

import { Card } from 'components/Card'

import { Container } from './style'

export const SkinList = () => {
   const listSeparatorRef = React.useRef<HTMLDivElement>(null)

   const isFetching = useOmniskin((state) => state.isFetching)
   const params = useOmniskin((state) => state.params)
   const setParams = useOmniskin((state) => state.setParams)
   const fetchSkins = useOmniskin((state) => state.fetch)
   const resultTotal = useOmniskin((state) => state.resultTotal)
   const skinList = useOmniskin((state) => state.skins)

   const [isScrollLimit, setIsScrollLimit] = React.useState<boolean>()

   React.useEffect(() => {
      window.addEventListener('scroll', (e) =>
         setIsScrollLimit(
            window.innerHeight + window.scrollY >= document.body.scrollHeight
         )
      )
   }, [])

   React.useEffect(() => {
      const loadMoreContent = async () => {
         await fetchSkins(params, true)

         if (listSeparatorRef.current) {
            const y =
               listSeparatorRef.current.getBoundingClientRect().top +
               window.pageYOffset -
               30
            window.scrollTo({ top: y, behavior: 'smooth' })
         }
      }

      if (params.page && resultTotal > 0) loadMoreContent()
   }, [params.page])

   React.useEffect(() => {
      const changeParamsPage = async () => {
         setParams({
            page: Number(params.page) + 1,
         })
      }

      if (isFetching === false && isScrollLimit) changeParamsPage()
   }, [isScrollLimit])

   return (
      <Container>
         {skinList &&
            skinList.map((skin, index) => (
               <React.Fragment key={skin.id}>
                  {Number(params.page) > 0 &&
                     index === skinList.length - resultTotal && (
                        <div
                           ref={listSeparatorRef}
                           className='list-separator'
                        />
                     )}
                  <Card key={skin.id} skin={skin} />
               </React.Fragment>
            ))}
      </Container>
   )
}
