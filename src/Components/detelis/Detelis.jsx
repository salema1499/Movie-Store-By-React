import axios from 'axios';
import React from 'react'
import { useState , useEffect } from 'react'
//import { BrowserRouter, Route } from 'react-router-dom'
import './detelis.css'
export const Detelis = (props) => {
    const imagePath="https://image.tmdb.org/t/p/w220_and_h330_face"
    const [movie , setMovie] = useState();
    const [loading , setLoading] = useState(true);
    // const [movie , setMovie] = useState();

    useEffect(() => {
      return () => {
        console.log("details props : ", props?.match?.params?.id);
       
        getData(props?.match?.params?.id);
      };
    }, [])


    function getData (id){
      const baseURL = 'https://api.themoviedb.org/3/movie/';
      const key = 'bf80873db6ac2774e205169ad61a86d2';

        axios.get(`${baseURL}${id}?api_key=${key}`).then(data =>{
          console.log("Movie Data : ", data);
          setMovie(data.data);
          setLoading(false)
        })
    }

    if (loading){
      return (
        <div className='detelis' style={{width:"100vh" ,backGroundColor:"blue",color:"white",fontSize:"20px"}}>
        please wait Info IS Loading !!!!
        </div>
      )
    } else {

  
      return (
        <div className='detelis'>
          <div style={{display:"flex"}}>
             <img style={{width:"25%",heigth:"50%", margin:"81px",borderRadius:"10PX"}} src={`${imagePath}${movie.poster_path}`}/>
             <div  style={{marginTop:"144px"}}>
                <p className='titlemovie' style={{fontSize:"85px" ,padding:"15px"}} >{movie.title}</p>
                <p  style={{fontSize:"23px",position:"relative",paddingRight:"23PX"}} >{movie.overview}</p>
             </div>
          </div>
          {/* <div style={{border:"solid " , width:"10%",marginLeft:"10%",borderRadius:"10PX",position:"relative" ,left:"-6px",bottom:"55px",padding:"2px"}}>
             <h5 className='vote_average'>vote_average : {movie.vote_average}</h5>
          </div> */}
        </div>
      )
      }
   
  // return (
  //   <div> 
  //   <img require style={{height:"60%"}} src={`${imagePath}${movie.poster_path}`} alt="no55o"/>
   
  //       <h1 className='hero-title' style={{color:"white",paddingLeft:"5px"}}>{movie.title} </h1>
  //        <p className='hero-overview' style={{paddingLeft:"10px"}}>{movie.overview}</p>
  
            
    
  //   </div>
  // )
}
