import React from 'react'
import './Movie.css'

function Movie(props) {
  // console.log("data is: ",props);
  return (
    <>
    <div className="card">
      <div className="left">
        <div className="header">
          <img src={props.movie.img1} alt="img1" />
          <div className="detail">
            <h1>{props.movie.name}</h1>
            <p>{props.movie.year}, {props.movie.Author}</p>
            <div className="time">
              <p className='mtime'>{props.movie.time} min</p>
              <p>Action, Crime, Fantasy</p>  
            </div>
          </div>
        </div>
        <p>{props.movie.story}</p>
        <div className="footer">
        <i class="fa-solid fa-share-nodes"></i>
        <i class="fa-solid fa-heart"></i>
        <i class="fa-solid fa-message"></i>
        </div>
      </div>
      <div className="right">
        <div className="poster">
        <img  src={props.movie.img2} alt="img2" />
      
        </div>
        </div>
    </div>
    </>
  )
}

export default Movie