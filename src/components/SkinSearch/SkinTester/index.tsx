import React, { ChangeEvent } from 'react'

import axios from 'axios'

import { Container } from './style'

import { RiComputerLine as ServerIcon } from 'react-icons/ri'

export const SkinTester = () => {
  const [skinLink, setSkinLink] = React.useState('')

  const handleChangeSkinLink = (event: ChangeEvent) => {
    const element = event.target as HTMLInputElement
    setSkinLink(element.value.trim())
  }

  const handleInspectSkin = async () => {
    try {
      const { data: serverLink } = await axios.post(
        'https://api.csgoskins.gg/tests/link',
        { link: skinLink },
      )

      if (serverLink.needs_to_connect === false) {
        location.href = 'steam://run/730'
      } else {
        location.href = serverLink.connect_to_url
      }
    } catch (error) {
      setSkinLink('')
      alert('Link inválido')
    }
  }

  return (
    <Container>
      <input
        value={skinLink}
        onChange={handleChangeSkinLink}
        placeholder="link da skin"
      />
      <button
        disabled={Boolean(skinLink.length === 0)}
        onClick={handleInspectSkin}
      >
        <ServerIcon size={18} />
        Testar no servidor
      </button>
    </Container>
  )
}
