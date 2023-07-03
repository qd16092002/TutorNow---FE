// import Footer from '../components/Footer'
import Header from '../components/Header'

function AppLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  )
}

export default AppLayout
