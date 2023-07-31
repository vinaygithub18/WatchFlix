import React from 'react';
import DashboardLayout from './DashboardLayout';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Text } from '@chakra-ui/react'
import Rating from '@mui/material/Rating';
import { Button } from '@chakra-ui/react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import ShareIcon from '@mui/icons-material/Share';
import {useNavigate} from 'react-router-dom';

function MainCarousel({trending}){
  console.log("inside carousel trending ");
  const navigate=useNavigate();
  const handleWatchNow=()=>{
    navigate('/videoplay');
  }
  return (
    <div className='carousel-component'>
    <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} showIndicators={false}>
        {
          trending.map((movie,index)=>{
            const rating=Math.floor((movie.vote_average)/2);
            console.log("rating ",rating);
            return (
              
               <div key={index} className='carousel-item'>
                <img style={{width: "100%",objectFit:"contain" , opacity:"0.6"}} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}></img>
                <div className='movie-details'>
                   <Text className='title'>{movie.original_title}</Text>
                   <Text className='desc'>{movie.overview}</Text>
                  <Rating name="read-only" value={rating} readOnly />
                  <div className='carousel-buttons'>
                      <Button className='watch-now-btn'
                      onClick={handleWatchNow}>
                        <PlayArrowIcon/> Watch Now</Button>
                      <div className='watchlist'>
                        <AddIcon style={{color: "white"}}/>
                        <Text className='watchlist-btn'>WATCHLIST</Text>
                      </div>
                      <div className='share'>
                          <ShareIcon style={{color: "white"}}/>
                          <Text className='share-btn'>SHARE</Text>
                      </div>
                  </div>
                </div>
              </div>
            )
          })
        }   
    </Carousel>
    </div>
  )
}
function Trending({trending, category}){
  console.log("inside trending ");
  const navigate=useNavigate();
  return (
    <div className='trending'>
      <Text style={{marginLeft: "10px"}}>{category}</Text>
      <div className='trending-movies'>
        {
          trending.map((movie,index)=>{
            return (
              <img key={index} className="image" style={{width: "146.293px",
                height: "216.796px",
                flexShrink: "0",
                margin:"5px",
                objectFit:"cover",
              }}  src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} onClick={()=>{
                navigate(`/watchmovie/${movie.id}`);
              }}></img>
            )
          })
        }
      </div>
    </div>
  )
}
function Home() {
  const optionsTrending = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    headers: {accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U', 
    }
  };
  const optionsSuspense = {
    method: 'GET',
    url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    headers: {accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U', 
    }
  };
  const optionsScifi = {
    method: 'GET',
    url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&without_genres=99,10755&vote_count.gte=200",
    headers: {accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U', 
    }
  };

  const [trending,setTrending]=useState([]);
  const [suspense,setSuspense]=useState([]);
  const [scifi,setScifi]=useState([]);
  useEffect(()=>{
    axios
    .request(optionsTrending)
    .then(function (response) {
      console.log("trending movies response ",response.data.results);
      setTrending(response.data.results);
    })
    .catch(function (error) {
      console.error(error);
    });
    //
    axios
    .request(optionsSuspense)
    .then(function (response) {
      console.log("trending movies response ",response.data.results);
      setSuspense(response.data.results);
    })
    .catch(function (error) {
      console.error(error);
    });
    //
    axios
    .request(optionsScifi)
    .then(function (response) {
      console.log("trending movies response ",response.data.results);
      setScifi(response.data.results);
    })
    .catch(function (error) {
      console.error(error);
    });
  },[])
  return (
    <DashboardLayout>
        <MainCarousel trending={trending}/>
        <Trending trending={trending} category={"Trending Now"}/>
        <Trending trending={suspense} category={"Suspense"}/>
        <Trending trending={scifi} category={"Sci-Fi"}/>
    </DashboardLayout>
  )
}

export default Home
