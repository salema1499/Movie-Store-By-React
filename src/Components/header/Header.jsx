import React ,{useState}from 'react'
import "./header.css"
import {Link} from 'react-router-dom'
// import img1 from '../../images/img1.jpeg'
//import img2 from '../../images/img2.jpeg'
export const Header = () => {
const [Mobile, setMobile] = useState(false)


return (
    <>
     <header>
       <div className='container flexSB'>
         <nav className='flexSB'>
           <div className='logo'>
              <h1><Link to="/">Movies</Link> </h1>
           </div>
           <ul className={Mobile? "navMenu-list ":"flexSB"} onClick={()=>setMobile(false)}>
             <Link to="/">Home</Link>
            
             <Link to="/allMovies">Movies</Link>
            
             
             
           </ul>
         <button className='toggle' onClick={()=>setMobile(!Mobile)}>
          {Mobile ?<i className='fa fa-times'></i> :  <i className='fa fa-bars'></i>}
         
         </button>
         
         </nav>
          <div className='account flexSB'>
          

          <i className='fa fa-bell'></i>
          <i className='fa fa-user'></i>
          <button>Subscribe Now</button>
         
          </div>


       
       </div>
     
     
     </header>
    </>
  )
}
