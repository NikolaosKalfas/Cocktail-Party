import ButtonStyle from "./button.style";
import Link from "next/link";
import React from 'react'

interface ButtonTypes {
  text: string
  href?: string
  variant: string
}

const Button = ({ text, href, variant, }:ButtonTypes) => {
  return (
    <Link href={href} passHref >
      <ButtonStyle href={href} variant={variant}>
        {text}
      </ButtonStyle>
    </Link>
  )
}

export default Button
