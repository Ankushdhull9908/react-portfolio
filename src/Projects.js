import React from 'react'
import './Projetcs.css'


export default function Projects() {
    var url = "https://react-resp-electronic.vercel.app/"

   
  return (
    <div className='projects'>
        <div class="projectsHeading">
                    <h1> Projects</h1>
                    <hr id="fifthHR"/>
                </div>
                <div class="allprojectsBox">
                    <div class="react-box1">
                      <video src="screenrecord.mp4" muted loop autoPlay onClick={()=>{
                        window.location.href = url;
                      }}/>
                         
                      <h4>E- Commerce Website using React JS</h4>
                      
                    </div>
                    <div class="jsBox1">
                    <video src="screenrecord2.mp4" muted loop autoPlay onClick={()=>{
                           window.location.href = "https://boo-project-a3f2.vercel.app/";
                    }} />
                    
                      <h4>Full Stack Book delivery using JavaScript</h4>
                      
                    </div>
                    
                    
                </div>
                

     
    </div>
  )
}
