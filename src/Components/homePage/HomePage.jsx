import React from 'react'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <div className='hero-content max-content' style={{height:"100vh"}}>
       <div className='hero-anther 'style={{height:"100vh"}}>
          <h1 className='hero-title' style={{color:"white",paddingLeft:"5px"}}> Welcome . </h1>
          <p className='hero-overview' style={{paddingLeft:"10px"}}>Millions of movies, TV shows and people to discover. Explore now.</p>
          <p className='hero-overview2'style={{color:"white",position:"relative",top:"22%",left:"35%",textAlign:"center",border:"solid ",borderRadius:"10px",width:"30%"}} > <Link className='linkMovie' style={{color:"white"}} to="/allMovies"> SHOW MoVIES </Link></p>
        </div>
         
    </div>
  )
}
