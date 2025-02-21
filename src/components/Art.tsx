import styled from "styled-components";
import {Artwork } from "../interfaces/Paintings.ts";

const AllCharsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: bisque;
`;

const SingleCharDiv=styled.div`
    display: flex;
    flex-direction: column;   
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px darkred solid;
    font: italic small-caps bold calc(2px + 1vw) Cursive;
    text-align: center;
    background-color: lightpink;
`;


export default function Art(props : { data:Artwork[] } ){
    
    return (
        <AllCharsDiv >
            {
                props.data.map((char: Artwork) =>
                    
                    <SingleCharDiv key={char.id}>
                        <h3>{char.title}</h3>
                        
                        <img src= {char.thumbnail.lqip} alt={char.thumbnail.alt_text}/>
                        <p>{char.place_of_origin}</p>
                        <p>{char.medium_display}</p>
                    </SingleCharDiv>
                )
            }
        </AllCharsDiv>
    );
}