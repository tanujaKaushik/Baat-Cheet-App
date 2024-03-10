import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.png";
import Myai from "../assets/myai.png";

export default function Home() {
   const navigate = useNavigate();

   return(
   // <>
   <Container>
      
      <div className="nav-bar">
         <img src={Logo} alt="logo"/>
         <h1>BaatCheet</h1>
      </div>

      <div className="container">
         <div className="content">
               <div className="first-div"></div>
               <div className="mid-div">
                  <h1>Come say hello! </h1>
                  <p>Join our <span>vibrant</span> community of chatters.</p>
                  <button onClick={()=> navigate('/register')}> Start Chatting Now </button>
               </div>
               <div className="last-div"></div>
         </div>
         <div className="img-container">
               <img src={Myai} alt="avatar"/>
         </div>
      </div>

      {/* <div className="msg-div">
         <p>
         Be yourself, express your heart, and stay connected with loved ones, all from the comfort of your device.
         </p>
      </div> */}

   </Container>
      // </>
 )
}

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
gap:1rem;
align-items:center;
// background-color: #eff6fd;
// background: linear-gradient(to bottom, #eff6fd, #c4e0f9);
overflow-x: hidden;
.nav-bar{
   height: 4rem;
   padding:1rem;
   oveflow:hidden;
   // background-color:#bcd4e6 ;
   background-color:#000036 ;
   width:100%;
   display:flex;
   justify-content:center;
   align-items:center;
   img{
      height:3rem;
      margin-right:0.5rem;
   }
   h1{
      // color:#037dbb;
      color:white;
      font-size:1.5rem;
   }
}
.container{
   display:grid;
   grid-template-columns:40% 60%;
   @media screen and (max-width:720px) {
      grid-template-columns: 100%; 
   }
   .content{
      display:grid;
      grid-template-rows:20% 40% 30%;
      .mid-div{
         padding:5rem;
         width:100%;
         height:auto;
         justify-content:center;
         text-align:right;
         h1{
            font-size:2rem;
            font-family:"Poppins";
         }
         p{
            font-size:2rem;
            margin:1rem 0rem;
            font-family:"Poppins";
         }
         span{
            color:#037dbb;
            font-family:"Poppins";
         }
         @media screen and (max-width:720px){
            padding:2rem;
            text-align:center;
            h1{
               font-size:1.75rem;
            }
            p{
               font-size:1.25rem;
            }
         }
      }
   }
   button{
      background-color:#f33e3e;
      margin:1rem;
      padding:.75rem 2rem;
      border-radius:0.75rem;
      color:white;
      font-size:1.25rem;
      border:none;
      cursor: pointer;
      &:hover {
         background-color: #45b1e8;
      }
      @media screen and (max-width:720px){
         font-size:1rem;
      }
   }
   .img-container{
      display:grid;
      place-items:center;
      img{
         width:80%;
   }
}
.msg-div{
   margin:9rem;
   padding: 5rem 10rem;
   border:2px solid black;
   text-align:center;
   p{     
      font-size:2rem;
   }
}
`;
