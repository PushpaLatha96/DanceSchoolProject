import React from 'react';
import styled from "styled-components";
// import home from "assets/home.png";
// import play from "assets/play.png";
import Navbar from './Navbar';
import { motion } from "framer-motion";
import { homeAnimation} from "animation";
import { useAuth0 } from "@auth0/auth0-react";


function Home() {
  const {  isAuthenticated, user } = useAuth0();

  return (
    <Section id="home">
      <Navbar />
      <div className='Userdetails'>
      {isAuthenticated && (
            
              <p className='User'>WELCOME TO DANCE <br/>SCHOOL {user.name} </p>
           
          )}

      </div>
      
      <motion.div className="home"
      variants={homeAnimation}
      transition={{ delay: 0.3, duration: 0.6, type: "tween" }}
      >
        <div className="content">
          <div className="title">
            <h1>Bharatanatyam</h1>
          </div>  
          <div className="subTitle">
            <p>
            Bharatanatyam is a dance of Tamil Nadu in southern India.
             It traces its origins back to the Natyashastra,
             an ancient treatise on theatre written by the mythic priest Bharata. 
            </p>  
          </div>
        </div>  
      </motion.div>

      
    </Section>
  );
}

const Section = styled.section`
  background: url(${"https://images.squarespace-cdn.com/content/v1/530286f8e4b0d1c4964d040e/1474392454950-M9V34HG581XSV4QG1TVO/image-asset.jpeg"}) no-repeat center;
  height: 100vh;
  background-size: cover;
  background-repeat:no-repeat;
  background-attachment: fixed;
  
  position: relative;
  .home{
    height: 100%;
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 60%;
      color:#FFC300;
      ;
      gap: 1.2rem;
      margin-top: 8rem;
      padding-left: 2rem;
      .title {
        h1 {
          font-size: 5rem;
          line-height: 5.3rem;
          color:white ;
        }
      }
      
      .subTitle {
        p {
          width: 70%;
          margin-bottom: 2rem;
          color:whitesmoke;
        }
      }
      
      }
    }
  }
  .User{
    color:white  ;
    font-size:2rem;
    font-family:sanserif;
    font-weight:400;
    position:relative;
  }
  
  @media screen and (min-width:280px) and (max-width: 1080px) {
    .home {
      .content {
        padding-left: 0rem;
        width: 100%;
        margin-bottom: 2rem;
        .title {
          h1 {
            font-size: 3rem;
            line-height: 4rem;
          }
        }
      }
    }
    .info {
      position: initial;
      .grid {
        grid-template-columns: 1fr;
      }
    }
    
  }

  @media screen and (max-width: 500px) {
   section{

    background-color: brown;
   }
  }

`;

export default Home