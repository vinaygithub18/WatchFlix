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
    <Carousel showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
        {
          trending.map((movie,index)=>{
            const rating=Math.floor((movie.vote_average)/2);
            console.log("rating ",rating);
            return (
               <div key={index} className='carousel-item'>
                <img style={{width: "80%",objectFit:"contain" , opacity:"0.6"}} src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}></img>
                <div className='movie-details'>
                   <Text style={{
                    color: "white",
                    fontFamily: "Oswald",
                    fontSize: "48px",
                    fontStyle: "normal",
                    fontWeight: "700",
                    lineHeight: "normal",
                   }}>{movie.original_title}</Text>
                   <Text style={{
                    color: "#FFF",
                    fontFamily: "Overpass",
                    fontSize: "18px",
                    fontStyle: "normal",
                    fontWeight: "500",
                    lineHeight: "24px", /* 133.333% */
                    letterSpacing: "0.54px",
                    textAlign:"left",
                   }}>{movie.overview}</Text>
                  <Rating name="read-only" value={rating} readOnly />
                  <div className='carousel-buttons'>
                      <Button style={{background: "#DA3714",paddingRight:"10px", height:"45px",borderRadius:"20px", border:"none", color: "white"}}
                      onClick={handleWatchNow}>
                        <PlayArrowIcon/> Watch Now</Button>
                      <div className='watchlist'>
                        <AddIcon style={{color: "white"}}/>
                        <Text style={{
                          color: "#FFF",
                          fontFamily: "Overpass",
                          fontSize: "15px",
                          fontStyle: "normal",
                          fontWeight: "300",
                          lineHeight: "24px", /* 160% */
                          letterSpacing: "0.45px"
                        }}>WATCHLIST</Text>
                      </div>
                      <div className='share'>
                          <ShareIcon style={{color: "white"}}/>
                          <Text style={{
                          color: "#FFF",
                          fontFamily: "Overpass",
                          fontSize: "15px",
                          fontStyle: "normal",
                          fontWeight: "300",
                          lineHeight: "24px", /* 160% */
                          letterSpacing: "0.45px"
                        }}>SHARE</Text>
                      </div>
                  </div>
                </div>
              </div>
            )
          })
        }   
    </Carousel>
  )
}
function Trending({trending}){
  console.log("inside trending ");
  const navigate=useNavigate();
  return (
    <div className='trending'>
      <Text style={{marginLeft: "10px"}}>Trending Now</Text>
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
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    headers: {accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTExNmExODI3MGM2MjQwNDM2YjU5NTBkM2E5Nzk0MiIsInN1YiI6IjY0Yjc5MDQ0MTA5Y2QwMDBjN2IwOGI4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6RvMsGmolIcMF89SdM8MndX6WvFp-k3BeR5Mve8iT4U', 
    }
  };

  const [trending,setTrending]=useState([]);
  useEffect(()=>{
    axios
    .request(options)
    .then(function (response) {
      console.log("trending movies response ",response.data.results);
      setTrending(response.data.results);
    })
    .catch(function (error) {
      console.error(error);
    });
  },[])
  return (
    <DashboardLayout>
        <MainCarousel trending={trending}/>
        <Trending trending={trending}/>
    </DashboardLayout>
  )
}

export default Home
