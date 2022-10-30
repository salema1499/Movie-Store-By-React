import React from 'react'
import { Link } from 'react-router-dom'
//import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export const MovieCard = ({movie}) => {
  const [id,setId]= useState(1)
  const imagePath="https://image.tmdb.org/t/p/w220_and_h330_face"
  // const imagePath= [
  //   {image:"../../images/home1.jpeg"},
  //   {image:"../../images/home2.jpeg"},
  //   {image:"../../images/home3.jpeg"},
  //   {image:"../../images/home4.jpeg"}
  // ]
  // console.log(movie)
  
  return (
  //   <div className='movie-card'>
    
  //   {movie.poster_path ? <img className='movie-cover'  src="https://www.vitalthrills.com/wp-content/uploads/2022/09/black-adam-poster.jpg" alt="noo"/>:
  // <div className={"movie-placeholder"}>No Found Image</div>}
  //   <h5 className='movie-title'>{movie.title}</h5>
    
  //   </div> 

  <div className='movie-card'>
    
    <Link to={`/Detelis/${movie.id}`}>
    {movie.poster_path ?  <img require style={{height:"60%"}} src={`${imagePath}${movie.poster_path}`} alt="no55o"/>:null }
    </Link>
   
    <h5 className='titleMovie' >{movie.title}</h5>
    <p style={{color:"gray"}}>{movie.release_date}</p>

    </div>
  )
}



