import Meta from '../components/Meta'
import GlobalStyles from '../styles/Globals.style';

const SecondaryLayout = ({children} : { children: React.ReactNode}) => {
  return (
    <GlobalStyles>
      <Meta />
      <div>
        <h1>This is the Secondary Layout</h1>
        {children}
      </div>
    </GlobalStyles>
  )
}

export default SecondaryLayout;