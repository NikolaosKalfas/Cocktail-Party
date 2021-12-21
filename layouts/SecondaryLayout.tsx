const SecondaryLayout = ({children} : { children: React.ReactNode}) => {
  return (
    <div>
      <h1>This is the Secondary Layout</h1>
      {children}
    </div>
  )
}

export default SecondaryLayout;