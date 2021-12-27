import styled from "@emotion/styled";
import primaryTheme from "../../styles/theme/theme";

const Button = styled('a')({
  backgroundColor: primaryTheme.colors.secondary,
  color: primaryTheme.colors.primary,
  padding: '10px 70px',
  fontSize: '38px',
  lineHeight: '48px',
  cursor: 'pointer',
  borderRadius: '3px',
  border: 'none',
  transition: '0.1s ease-in-out',

  '&:hover, &:focus, &:active': {
    backgroundColor: primaryTheme.colors.secondaryHover
  }
})

export default Button