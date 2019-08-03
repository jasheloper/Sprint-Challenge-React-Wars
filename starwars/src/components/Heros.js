import React from "react";
import styled from "styled-components";



const HeroDiv = styled.div `
    
    width: 50%;
    margin: auto;
    background-color: #212F3C
    color: white;
    padding: 2em;
    border-radius: 4em;
    border-bottom: 2px solid;
    text-align: center;
    line-height:3em;
    font-family: verdana;
`

const NameH2 = styled.h2 `
   color: #F7DC6F;
`

const InfoDiv = styled.div `
  margin: auto; 
  padding: 2em;
  text-align: center;
  font-size: 1em;
  color: #FCF3CF;
  background-color: black;
  border-radius: 3em;
  border: 3px solid #76448A;
  width: 50%;
`



export default function HeroCard(props) { 
  return (

    <HeroDiv>



      <p>

        <NameH2>  {props.name} </NameH2>  


    <InfoDiv>
      Mass: {props.mass}  <br />
      Height: {props.height}  <br />
      Gender: {props.gender}  <br />
      Birth Year: {props.year}  <br />
      </InfoDiv>


      </p>

     

    </HeroDiv>

  );
}
