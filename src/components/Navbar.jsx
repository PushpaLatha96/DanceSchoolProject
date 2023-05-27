import React, { useState } from 'react';
import styled from "styled-components";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';


function Navbar() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();//
  const { logout } = useAuth0();
  const [isNavOpen,setIsNavOpen] = useState(false);

  return <Nav 
  >
    <div className="brand__container">
    

      <a href="#Carousel" className="logo">
         <div>  <img
              className="logo-image"
              src="https://5.imimg.com/data5/XK/JW/GLADMIN-47665559/bharatanatyam-dance-250x250.png"
              alt=""
              /></div>
              <div>
              <h3>
          Amrutha Sri Varshini <br/> School of M.A.D
            
          </h3></div>
        </a>


      <div className="toggle">
        {isNavOpen ? (
          <MdClose onClick={ () => setIsNavOpen(false)} />
        ) : (
          <GiHamburgerMenu
            onClick={ (e) => {
              e.stopPropagation();
              setIsNavOpen(true);
            }}
            />
        )}
      </div>
    </div>
    <div className={`links ${isNavOpen ? "show" : ""}`}>
    <ul>
        <li >
            <a href="#home" onClick={() => setIsNavOpen(false)}>Home</a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsNavOpen(false)}>About Us</a>
          </li>
          <li>
            <a href="#Gallery" onClick={() => setIsNavOpen(false)}>Gallery</a>
          </li>
         
          <li>
            <a href="#contact" onClick={ () => setIsNavOpen(false)}>Contact Us</a>
          </li>



          {isAuthenticated ? (
            <li>
              <Button
                onClick={() => logout({ returnTo: window.location.origin })}>
                Log/Out
              </Button>
            </li>
          ) : (
            <li>
              <Button onClick={() => loginWithRedirect()}>Log/In</Button>
            </li>
          )}

          
        </ul>
    </div>
  </Nav>
}

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  margin: 0 0rem;
  color: #E74C3C;
  font-size:1.7rem;
  .brand__container {
    margin: 0 2rem;
    .toggle {
      display: none;
    }
    .logo {
      text-decoration: none;
      font-family: Cormorant bold;
      font-size: 20px;
      color: white;
      display:flex;
      flex-direction:row;
      gap:1rem;
      line-height:1rem;
    }
    .logo-image {
      height: 60px;
      width: 60px;
      border-radius: 40px;
      cursor: pointer;
      margin-left: 0.4rem;
    }
    @media screen and (max-width: 600px) {
      .logo-image {
        height: 50px;
        width: 100px;
        border-radius: 50px;
        cursor: pointer;
      }
    }
    h3{
      color: orange;
    }
  }
  .links {
    ul {
      list-style-type: none;
      display: flex;
      gap: 2rem;
      .active{
        a {
          border-bottom: 0.2rem solid var(--secondary-color);
        }
        
      }
      li {
        a {
          color: orange;
          text-decoration: none;
          font-weight: 500;
          font-size: 1.2rem;
          text-transform: uppercase;
        }
      }
      .User{
        color:white  ;
        font-size:2rem;
        font-family:sanserif;
        font-weight:400;
      }
      li{
        a:hover {
          
        color: var(--secondary-color);;
            
          
        }
      }
      h3{
        color:#E74C3C;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 1080px) {
    margin: 0;
    position: relative;
    .brand__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .toggle {
        padding-right: 0rem;
        display: block;
        z-index: 1;
      }
    }
    .show {
      opacity: 1 !important;
      visibility: visible !important;
    }
    .links {
      position: absolute;
      overflow-x: hidden;
      top: 0;
      right: 0;
      width: ${({ state }) => (state ? "100%" : "0%")};
      height:70vh;
      background-color: white;
      opacity: 0;
      visibility: hidden;
      transition: 0.4s ease-in-out;
      ul {
        flex-direction: column;
        text-align: center;
        height: 100%;
        justify-content: center;
      }
    }
    
     
    }
  }
`;

export default Navbar;






