const PrimaryLayout = ({children} : { children: React.ReactNode}) => {
  return (
    <div>
      <h1>This is the Primary Layout</h1>
      {children}
    </div>
  )
}

export default PrimaryLayout;