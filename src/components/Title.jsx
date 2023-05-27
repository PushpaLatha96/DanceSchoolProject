import React from 'react';
import styled from "styled-components";

function Title({ value }) {
  return ( 
  <Div>
    <h1>{value}</h1>
  </Div>
  );
}

const Div = styled.div`
position: relative;
text-align:center;
h1 {
  font-size: 3rem;
  text-transform: uppercase;
  color: #FFC300;
  font-weight: 400;
  padding-top:40px;
  font-family:sanserif;
  
}


@media screen  (max-width: 600px) {
  div{
    h1 {
    font-size: 0rem;
    text-transform: uppercase;
    color: #FFC300;
    font-weight: 400;
    padding-top:40px;
    font-family:sanserif;
    
  }}

}
`;

// position: absolute;
// transform: translateX(-30%) translateY(20vw) rotate(-90deg);
// @media screen and (min-width: 280px) and (max-width: 1080px) {
//   display: none;
// }
export default Title