import Button from "./buttonPrimary.style";

import React from 'react'

interface Buttons {
  text: string
  href?: string
}

const ButtonPrimary = ({ text, href }:Buttons) => {
  return (
    <Button href={href}>
      {text}
    </Button>
  )
}

export default ButtonPrimary
