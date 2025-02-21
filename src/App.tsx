import { useState, useEffect } from 'react';
import styled from "styled-components";
import {Character} from "./interfaces/Characters.ts";
import Anime from "./components/Anime.tsx"


const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkgoldenrod solid;
`;


export default function App(){
  //state hook to store data
  const [data, setData] = useState<Character[]>([]);

  //effect hook for error handling and re-rendering
  useEffect(()=>{
    async function fetchData(): Promise<void>{
      const rawData = await fetch("https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=4658");
      const {results} : {results: Character[]} = await rawData.json();
      setData(results);
    }
    fetchData()
      .then(() => console.log("Data fetched successfully."))
      .catch((e:Error) => console.log ("There was an error: " + e));

  }, [data.length]);

  return (
    <ParentDiv>
      <Anime data={data}/>
    </ParentDiv>
  )

}