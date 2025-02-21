import { useState, useEffect } from 'react';
import styled from "styled-components";
import {Artwork} from "./interfaces/Paintings.ts";
import Art from "./components/Art.tsx"


const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px #ff3838 solid;
`;


export default function App(){
  //state hook to store data
  // const[numArtWorks,setNumArtWorks]= useState(10);
  const [data, setData] = useState<Artwork[]>([]);

  //effect hook for error handling and re-rendering
  useEffect(()=>{
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://api.artic.edu/api/v1/artworks/search?q=cats");
      const {data} : {data: Artwork[]} = await rawData.json();
      setData(data);
    }
    fetchData()
      .then(() => console.log("Data fetched successfully."))
      .catch((e:Error) => console.log ("There was an error: " + e));

  }, [data.length]);

  return (
    <ParentDiv>
      
      <div>
            <div>
                <Art data={data}/>
            </div>
        </div>
    </ParentDiv>
  )

}