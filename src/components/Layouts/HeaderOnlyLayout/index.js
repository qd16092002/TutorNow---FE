import Header from '../components/Header'

function HeaderOnlyLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default HeaderOnlyLayout
