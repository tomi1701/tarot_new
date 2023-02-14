// import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./pages/Home"
// import Booking from "./pages/Booking"
import Podcasts from "./pages/Podcasts"
import GiftsAndLove from './pages/GiftsAndLove'
import styles from "./style";

function App() {
  return (
    <div className="App">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
        <Home />
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer/>
        </div>
      </div>
      
    </div>
  )
}

export default App