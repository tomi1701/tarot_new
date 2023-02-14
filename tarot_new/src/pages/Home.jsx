import React from 'react'
import Introduction from '../containers/home/introduction'
import Pickcard from '../containers/home/pickcard'
import Latestvideos from '../containers/home/latestvideos'
import Animation from '../containers/home/animation'
import { navLinks } from "../constants";


const Home = () => {
  return (
    <div>
      <hr/>
      <Introduction/>
      <Pickcard/>
      <Latestvideos />
      <Animation/>
      {/* <hr/> */}
      
    </div>
  )
}

export default Home