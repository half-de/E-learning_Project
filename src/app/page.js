// import Navbar from './Home/First-Card/navbar.jsx'
// import Page from './Home/Seacand-Card/page.jsx'
import 'bootstrap/dist/css/bootstrap.css'
import Script from 'next/script'
// import Feram from './Home/Feram/feram.jsx'
// import Pages from './Home/thared-Card/page.jsx'
import Home from './pages/home/home.jsx'


export default function pages () {
  return (
    <>
    <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>

    {/* <Navbar/>
    <Feram />
    <Page />
    <Pages /> */}
  <Home />

    
    </>
  )
}