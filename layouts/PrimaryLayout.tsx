import Meta from '../components/Meta'
import GlobalStyles from '../styles/Globals.style';

const PrimaryLayout = ({children} : { children: React.ReactNode}) => {
  return (
    <GlobalStyles>
      <Meta />
      <div>
        <h1>This is the Primary Layout</h1>
        {children}
      </div>
    </GlobalStyles>  
  )
}

export default PrimaryLayout;