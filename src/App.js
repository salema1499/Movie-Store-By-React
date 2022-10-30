import "./App.css";
import React from "react";
//import { useEffect,useState } from 'react';
//import axios from "axios"
import { BrowserRouter, Switch, Route ,Router,Routes } from "react-router-dom";
import { Header } from "./Components/header/Header";
//import { MovieCard } from "./Components/moviecard/MovieCard";
import { Detelis } from "./Components/detelis/Detelis";
//import {Home} from "./Components/home/Home"
//import { MovieCard } from './Components/moviecard/MovieCard';
import { HomePage } from "./Components/homePage/HomePage";
import { Home } from "./Components/home/Home";

function App() {
  // const history=useHistory();
  // console.log(history)
  //   const[search,setSearch]=useState("")
  //  const[selectmovie,setSelectMovie]=useState({})
  // const searchMovies=(e)=>{
  //   e.preventDefault()
  //   fetchMovies(search)
  // }
  // const [movies, setMovies] = useState([])
  // const API_URL ="https://api.themoviedb.org/3"
  // const fetchMovies=async(search)=>{
  //   const type=search?"search" :"discover"
  //    const {data :{results}}=await axios.get(`${API_URL}/${type}/movie`,{
  //      params:{
  //        api_key:"bf80873db6ac2774e205169ad61a86d2",
  //       query :search
  //       }
  //    })
  //    setSelectMovie(results[0])
  //     setMovies(results)
  //    console.log("data",results)

  // }
  // useEffect(()=>{
  //   fetchMovies()
  // },[])

  // const rendreMovies =()=>(

  //   movies.map(movie=>(
  //     <MovieCard
  //         key={movie.id}
  //         movie={movie}

  //     />
  //   ))
  // )
  // return (
  //   <div>
  //     <BrowserRouter>
  //       <Header />

  //       <Switch>
  //         <Route  path="/allMovies" component={Home} />
  //         <Route  path="/Detelis/:id" component={Detelis} />
  //         <Route exact path="/" component={HomePage} />
  //       </Switch>
  //     </BrowserRouter>
  //   </div>
  // );
  return (
      <BrowserRouter>
        <Header />

        <Switch>
          <Route  path="/allMovies" component={Home} />
          <Route  path="/Detelis/:id" component={Detelis} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </BrowserRouter>
  );
}

export default App;
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
