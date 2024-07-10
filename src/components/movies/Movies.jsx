import React from "react";
import "./Movies.css";
import Movie from "../Movie/Movie";
// import "../../assets/M1I1.jpg";
import M1I1 from "../../assets/M1I1.jpg";
import M1I2 from "../../assets/M1I2.jpg";
import M2I1 from "../../assets/M2I1.jpg";
import M2I2 from "../../assets/M2I2.jpg";


const arr = [
  {
    "id": "1",
    "name": "Bright",
    "year": "2017",
    "Author": "David Ayer",
    "time": "117",
    "story":
      "Bright is a 2017 American urban fantasy action film directed by David Ayer and written by Max Landis. The film is set in an alternate present in which ...",
    "img1": M1I1,
    "img2": M1I2,
  },
  {
    "id": "2",
    "name": "tom rider",
    "year": "2018",
    "Author": "Peter Jackson",
    "time": "130",
    "story":
      "Tomb Raider is a 2018 action-adventure film directed by Roar Uthaug, with a screenplay by Geneva Robertson-Dworet and Alastair Siddons, from a story by Evan ...",
    "img1": M2I1,
    "img2": M2I2,
  },
];
function Movies() {
  return (
    <>
      <div className="movies">
        <h1 className="heading">Movies</h1>
        <div className="main">
          {arr.map((ele) => (
            <>
            <Movie movie={ele} key={ele.id}/>
          </>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movies;
