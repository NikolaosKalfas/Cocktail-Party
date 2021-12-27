import Button from "./buttonPrimary.style";
import Link from "next/link";
import React from 'react'

interface Buttons {
  text: string
  href?: string
}

const ButtonPrimary = ({ text, href }:Buttons) => {
  return (
    <Link href={href} passHref>
      <Button href={href}>
        {text}
      </Button>
    </Link>
  )
}

export default ButtonPrimary
