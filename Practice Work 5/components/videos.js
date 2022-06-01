import React, {useState} from 'react';
import "./videos.css";

const Videos = (props) => {

    return (
        <div>
        <h1>Video List</h1>
        <hr></hr>
        <input type="text" name="search" size="large" value={props.search || ""} onChange={(e) => props.handleChange(e)} placeholder="Search for Videos" />

        <div >
          <input type="checkbox" id="box" checked={props.checkboxAvailable} onChange={props.checkboxAvailableHandle} />
          &nbsp;
          <label for="box" > Only show available videos</label>
         </div>

         {props.videolist.length > 0 ? props.videolist.map( (video, id) => (

        <div className="card" key={ id }>
          <div className="card-body">
            <h5 className={"card-title ${!video.available} && 'red'"}>{ video.title }</h5>
            <h6 className="card-subtitle mb-2 text-muted">{ video.genre } </h6>
            <p className="card-text">{ video.description } </p>
          </div>
        <hr></hr>
        </div>

        )) 
        : <div className="card red" > The Video you are searching for was not found!</div>
      }
      </div>
    
      );

}


export default Videos;







