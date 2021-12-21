import styled from '@emotion/styled'

// This is an example
const Title = styled('h1')({
  margin: '0',
  lineHeight: '1.15',
  fontSize: '4rem',

  'a': {
    color: '#0070f3',
    textDecoration: 'none',
  },

  '&:hover, &:focus, &:active': {
    textDecoration: 'underline',
  }
})

export default Title