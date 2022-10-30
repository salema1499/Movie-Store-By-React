

import React from "react";
import { useEffect,useState } from 'react';
import axios from "axios"
import { BrowserRouter as Router } from "react-router-dom";
//import { Header } from './Components/header/Header';
import { MovieCard } from "../moviecard/MovieCard"
//import { Header } from "../header/Header";
//import {Detelis} from './Components/detelis/Detelis'


export const Home=()=> {
  // const history=useHistory();
  // console.log(history)
  const[search,setSearch]=useState("")
 const[selectmovie,setSelectMovie]=useState({})
const searchMovies=(e)=>{
  e.preventDefault()
  fetchMovies(search)
}
  const [movies, setMovies] = useState([])
  const API_URL ="https://api.themoviedb.org/3"
  const fetchMovies=async(search)=>{
    const type=search?"search" :"discover"
     const {data :{results}}=await axios.get(`${API_URL}/${type}/movie`,{
       params:{
         api_key:"bf80873db6ac2774e205169ad61a86d2",
        query :search
        }
     })
     setSelectMovie(results[0])
      setMovies(results)
     console.log("data",results)

  }
  useEffect(()=>{
    fetchMovies()
  },[])

  const rendreMovies =()=>(

    movies.map(movie=>(
      <MovieCard
          key={movie.id}
          movie={movie}
      
      />
    ))
  )
  return (
    <div>


    <form onSubmit={searchMovies}> 
    <input style={{marginTop:"7%"}}  placeholder='Search Any Movie...' type="text" onChange={(e)=>setSearch(e.target.value)}/>
     
 </form>
   
      <Router>
  
       
         
        
       
            <div className='container2'>
            {rendreMovies()}
            </div>
      
         
      </Router>
     
    </div>
  );
}


// <button className='buttonsearch' type={"submit"}>
//               <i className='fa fa-search'></i>
//            </button>





















// import React from 'react'
// //import { useState } from 'react';
// //import { BrowserRouter,Route,Router } from 'react-router-dom';
//   import { Link } from 'react-router-dom';
// export const detelies = () => {
//      //const[selectmovie,setSelectMovie]=useState({})
//    // const API_URL ="https://api.themoviedb.org/3"
//     // const {data :{results}}=await axios.get(`${API_URL}/${type}/movie`,{
//     //     params:{
//     //       api_key:"bf80873db6ac2774e205169ad61a86d2",
//     //      query :search
//     //      }
//     //   })
//     //   setSelectMovie(results[0])
//   return (
//     <div> 

//     <Link to="/">
//     <h1 className='hero-title' style={{color:"white",paddingLeft:"5px"}}> Welcome . </h1> </Link>
//     <p className='hero-overview' style={{paddingLeft:"10px"}}>Millions of movies, TV shows and people to discover. Explore now.</p>
  

//     </div>


//   )
// }
