import React, { useEffect, useState } from 'react'
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import Movielist from '../../Components/movieList/Movielist';

const Home = () => {
        const [popularMovies,setPopularMovies] = useState([])
    useEffect(()=> {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))

    },[])
  return (
    <>
    <div className='poster'>
      <Carousel
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={true}
            >
                {
                    popularMovies.map((movie) => {
                          return <Link style={{textDecoration:"none"}} to={`/movie/${movie.id}`}>
                            <div className="postImage">
                                <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="" />
                            </div>
                            <div className="posterImage_overlay">
                                <div className="posterImage_title">{movie ? movie.original_title:""}</div>
                                <div className="posterImage_runtime">
                                  

                                {movie ? movie.release_date:""}
                                  
                                <span className="posterImage_rating">
                                    {movie ? movie.vote_average:""}
                                    <i className="fa fa-star"/>
                                </span>
                                </div>
                                <div className="posterImage_description">{movie ? movie.overview :""}</div>
                            </div>
                        </Link>
                    })
                }

      </Carousel>
      <Movielist/>
    </div>
    </>
  )
}

export default Home
