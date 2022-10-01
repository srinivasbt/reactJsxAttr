import React from "react";
import ReactDOM from "react-dom";

const name = "Srinivas";
const year = 2019;
const curDate = new Date();
//console.log(curDate);
const cur_year = curDate.getFullYear();
//console.log(cur_year);

const imgVar1 = "https://picsum.photos/id/2/200/300";
const imgVar2 = "https://picsum.photos/id/3/200/300";
const imgVar3 = "https://picsum.photos/id/1/200/300";

//Using the JSX attribute
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="false" spellcheck="false">
      Created by {name}
    </h1>
    <div>
      <img className="business-img" src={imgVar1} alt="bu1"></img>
      <img className="business-img" src={imgVar2} alt="bu1"></img>
      <img
        className="business-img"
        src={imgVar3 + "?grayscale"}
        alt="bu1"
      ></img>
    </div>
    <p>Copyright from {year}</p>
    <p>Copyright {cur_year}</p>
  </div>,
  document.getElementById("root")
);

//Using the class attribute
/*
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellcheck="false">
      Created by {name}
    </h1>
    <div>
      <img
        className="business-img"
        src="https://images.freeimages.com/images/large-previews/7f0/business-coffee-1-1573107.jpg"
      ></img>
      <img
        className="business-img"
        src="https://images.freeimages.com/images/large-previews/3fa/goblet-of-coffee-1567990.jpg"
      ></img>
      <img
        className="business-img"
        src="https://images.freeimages.com/images/large-previews/e04/yellow-frontal-with-ivy-1228121.jpg"
      ></img>
    </div>
    <p>Copyright from {year}</p>
    <p>Copyright {cur_year}</p>
  </div>,
  document.getElementById("root")
);
*/

/*
ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellcheck="false">
      Created by {name}
    </h1>
    <p>Copyright from {year}</p>
    <p>Copyright {cur_year}</p>
  </div>,
  document.getElementById("root")
);
*/

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.

/*
ReactDOM.render(
  <div>
    <h1>Created by Srinivas B T</h1>
    <p>Copyright 2022</p>

    <ul>
      <li>Dosa</li>
      <li>Paneer</li>
      <li>Rice</li>
    </ul>
  </div>,
  document.getElementById("root")
);
*/
