import React from 'react'
import { NavLink} from 'react-router-dom';
import '../App.css';
import { useContext } from 'react'
import { Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {Search2Icon ,BellIcon} from '@chakra-ui/icons'

function Footer(){
  return (
    <div className='footer'>
      <div className='header-title'>
        <Text id="watch">Watch</Text>
        <Text id="flix">Flix</Text>
      </div>
      <div className='connect-us'>
        <Text className='footer-item-head'>Conntect Us</Text>
        <Text className='footer-item'>-About </Text>
        <Text className='footer-item'>-Contact Us</Text>
        <Text className='footer-item'>-Help Center</Text>
        <Text className='footer-item'>-Career</Text>
      </div>
      <div className='manage'>
        <Text className='footer-item-head'>Manage</Text>
        <Text className='footer-item'>-Account</Text>
        <Text className='footer-item'>-Manage Account</Text>
        <Text className='footer-item'>-Buy Gift Card</Text>
        <Text className='footer-item'>-Redeem Gift Card</Text>
      </div>
      <div className='information'>
        <Text className='footer-item-head'>Information</Text>
        <Text className='footer-item'>-Privacy</Text>
        <Text className='footer-item'>-Terms & Condition</Text>
        <Text className='footer-item'>-Cookies</Text>
        <Text className='footer-item'>-FAQ</Text>
      </div>
    </div>
  )
}
function MainContent(props){
  console.log("main content props",props);
  return (
    <>
    <div className='main-content'>
        {props.children}
    </div>
    </>
  )
}
function Header(props){
  return (
    <div className='header'>
      <div className='header-title'>
        <Text id="watch">Watch</Text>
        <Text id="flix">Flix</Text>
      </div>
      <div className='header-menu'>
        <Link className='header-menu-item'  >Movies</Link>
        <Link className='header-menu-item' >Tv Series</Link>
        <Link className='header-menu-item' >Documentaries</Link>
        <Link className='header-menu-item' to='/categories'>Categories</Link>
      </div>
      <div className='header-end'>
        <Search2Icon style={{color: "white"}}/>
        <BellIcon style={{color: "white"}}/>
        <Link style={{
          color: "#FFF",
          fontFamily: "Poppins",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "normal",
          textDecoration: "none"
        }} >Sign up</Link>
      </div>
    </div>
  )
}
function DashboardLayout(props) {
  return (
   
      <div className='dashboard-layout'>
        <Header {...props}/>
        <MainContent {...props} />
        <Footer {...props}/>
      </div>
  )
}

export default DashboardLayout
