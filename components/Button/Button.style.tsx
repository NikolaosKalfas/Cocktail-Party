import styled from "@emotion/styled";
import { variant } from 'styled-system';
import colors from "../../styles/global-styles/colors";

const ButtonStyle = styled('a')(
  {
    padding: '10px 70px',
    fontSize: '38px',
    lineHeight: '48px',
    cursor: 'pointer',
    borderRadius: '3px',
    border: 'none',
    transition: '0.1s ease-in-out',
    '&:hover, &:focus, &:active': {
      backgroundColor: colors.secondaryHover
    },
  },
  variant({ 
    variants: { 
      primary: { 
        background: colors.primary,
        color: colors.secondary
    }, 
      secondary: { 
      background: colors.secondary
        },
      },
    })
)

export default ButtonStyle