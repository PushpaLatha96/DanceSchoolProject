import React, { useState } from 'react';
import styled from "styled-components";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const testimonials = [
    {
      designation: "BharataNatyam",
      review:
      "“It gives a wonderful cardio workout, improves blood circulation, tones muscles and is good for bone density as it is a contact exercise,” says danseuse Alarmel Valli. Dancer and choreographer Anita Ratnam says Bharatanatyam has both physical,mental benefits."
    },
    {
      designation: "Kolattam",
      
      review:
      "Kolannalu or kolkolannalu (also named kolattam), 'stick dance', is one of the most popular dance narratives in the Southern part of India. It is a rural art usually performed during village festivals. It is a combination of rhythmic movements, songs and music."
    },
    {
      designation: "Kuchipudi",
     
      review:
      "Kuchipudi is a dance-drama performance, with its roots in the ancient Hindu Sanskrit text of Natya Shastra. It developed as a religious art linked to traveling bards, temples and spiritual beliefs, like all major classical dances of India."
    },
  ];
  return (
    <Section >
      <div className="container">
        <div className="testimonials"
        
        >
          {
            testimonials.map(({ designation, name, review}, index)=> {
              return (
                <div className={`testimonial ${selected === index ? "active" : "hidden"}`} key={index}>
                  <div className="image">
                    
                  </div>
                  <div className="title-container">
                    <span className="designation">
                      {designation}
                    </span>
                    <h3 className='title'>{name}</h3>
                  </div>
                  <p className="description">{review}</p>
                </div>
              );
            })
          }
        </div>
        <div className="controls"
       
        >
        <button
            className={selected === 0 ? "active" : ""}
            onClick={() => {
              setSelected(0);
            }}>
        </button>
        <button
            className={selected === 1 ? "active" : ""}
            onClick={() => {
              setSelected(1);
            }}>
        </button>
        <button
            className={selected === 2 ? "active" : ""}
            onClick={() => {
              setSelected(2);
            }}>
        </button>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.section`
overflow: hidden;
background: url(${"https://cdn.exoticindia.com/images/products/original/sculpture-2019/zag18.jpg"}) no-repeat center;
background-size: cover;
background-repeat:no-repeat;
background-attachment: fixed;
opacity:0.7;



.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  .testimonials {
    display: flex;
    gap: 1rem;
    text-align: center;
    justify-content: center;
    width: 30%;
    .testimonial {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      .image {
        position: relative;
        .circle2 {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 10rem;
          width: 10rem;
          border-radius: 10rem;
          background-color: orange;
        }
      }
    }
    .description{
      color:whitesmoke;
      font-size:18px;
      font-weight:400;
    }
    .hidden {
      display: none;
    }
    color: white;
    font-size:3rem;
    font-weigth:500;
    font-family:sanserif;
    .designation {
      height: 8rem;
    }
  }
  .controls{
    display: flex;
    gap: 1rem;
    button {
      padding: 0.5rem;
      border-radius: 1rem;
      background-color: orange;
      border: 0.1rem solid transparent;
      cursor: pointer;
    }
    .active {
      background-color: transparent;
      border: 0.1rem solid var(--secondary-color);
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) { 
  .background {
    display: none;
  }
  .container {
    padding: 4rem 0;
    .testimonials {
      width: 80%;
      .testimonial {
        .description {
          height: 18rem;
        }
      }
    }
  }
}
`;

export default Testimonials