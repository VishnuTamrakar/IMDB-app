import React, { useEffect, useState } from 'react'
import Card from '../card/Card'
import './movielist.css'
import { useParams } from 'react-router-dom'

const Movielist = () => {

  const [movieList,setMovieList]= useState([]);
  const {type} = useParams();

  useEffect(()=>{
    getData();
  },{});

  useEffect(()=>{
    getData();
  },[type]);
  const getData = ()=>{
    fetch(`https://api.themoviedb.org/3/movie/${ type ? type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
    .then(res => res.json())
    .then(data => setMovieList(data.results))
  }
  return (
    <div className='movie_list'>
      <h1 className='list_title'>{(type ? type : "POPULAR").toUpperCase()}</h1>
      <div className="card_list">
        {
        movieList.map((movie)=>{
         return <Card movie={movie}/>
        }
        )
}
      </div>
      
    </div>
  )
}

export default Movielist
