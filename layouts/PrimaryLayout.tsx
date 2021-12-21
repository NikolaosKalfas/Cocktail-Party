import Meta from '../components/Meta'

const PrimaryLayout = ({children} : { children: React.ReactNode}) => {
  return (
    <>
      <Meta />
      <div>
        <h1>This is the Primary Layout</h1>
        {children}
      </div>
    </>  
  )
}

export default PrimaryLayout;