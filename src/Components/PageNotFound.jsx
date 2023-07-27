import React from 'react'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function PageNotFound() {
    const navigate=useNavigate();
    useEffect(()=>{
        setTimeout(()=>{
            navigate('/');
        },1000);
    },[]);
  return (
    <div>
      Page Not Found
    </div>
  )
}

export default PageNotFound
