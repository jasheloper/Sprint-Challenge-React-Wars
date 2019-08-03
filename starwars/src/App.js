import React, { useEffect, useState } from "react";
import './App.css';
import axios from "axios";



const App = () => {




  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.


  const [] = useState([]);


  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {

    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
       

        console.log(response.data.results);
          })

      .catch(
        error => console.log(error)
      )
  }, [] )



  return (<div></div>)
  
  }


export default App;
