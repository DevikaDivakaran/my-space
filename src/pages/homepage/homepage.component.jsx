import React from 'react';
import Directory from '../../components/directory/directory.component';
export default function HomePage() {
  return (
    <div className='homepage'>
       <div className="container">
        
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="homepage">My Space</a>
  

     
        <a class="nav-link" href="homepage">Home </a>

        <a class="nav-link" href="/">Sign Out</a>
      
     
    
    
  
</nav>

   </div>
  <Directory/>
  </div>
  )
  }