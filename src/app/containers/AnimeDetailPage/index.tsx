import React, { useEffect } from 'react'
import { useParams } from 'react-router';



const AnimeDetailPage = () => {
    let {id} = useParams();
  
    // const fetchAnimeDetailById = async (id:number) => {
    //   const detail = await animeService
    // }
    useEffect(() => {
      // getAnime by id and after take details set data
    }, [id])
    return (
      <h1>{id}</h1>
    )
  }

  export default AnimeDetailPage;