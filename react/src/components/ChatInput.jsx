import React ,{ useState} from "react";
import styled from "styled-components";
// import Picker from 'emoji-picker-react';
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {IoMdSend} from 'react-icons/io';
import {BsEmojiSmileFill} from 'react-icons/bs';


export default function ChatInput({handleSendMsg}) {
    
    const [emojiPicker, setEmojiPicker] = useState(false);
    const [pickerClicked, setPickerClicked] = useState(false);
    const [msg, setMsg] = useState("");
    
    const handleEmojiPickerhideShow = () => {
        console.log("ha bhai change krdo emoji picker ko",emojiPicker);   
        setPickerClicked(true);
        setEmojiPicker(!emojiPicker);
        console.log(emojiPicker);        
    };

    const handleEmojiClick = (emoji, event) => {
        setMsg(msg + emoji.native);
        handleEmojiPickerhideShow();
        // console.log(emoji.native);
    }

    const closePicker = () => {
        // if (pickerClicked && ){
        //     setEmojiPicker(false);
        //     setPickerClicked(false);
            console.log("picker clicked h aur close kr rha hu")
        // }
    };

    const sendChat = (event) => {
        event.preventDefault(); 
        if(msg !== ""){
            handleSendMsg(msg);
            // console.log("msg sent: ",msg);
            setMsg("");
        }
    };

    return(                
        <Container>
            <div className="button-container"> 
                <div className="emoji">
                    <BsEmojiSmileFill onClick={handleEmojiPickerhideShow}/>
                    {
                        emojiPicker &&  (
                            <div className="picker-container">
                                <Picker data={data} 
                                    onEmojiSelect={handleEmojiClick}
                                    // onClickOutside={closePicker}
                                    />
                            </div>)
                    }
                </div>
            </div>
            <form className="input-container" onSubmit={(e) => {sendChat(e)}}>
                <input 
                    type='text'
                    placeholder="Type your message here " 
                    value={msg} 
                    onChange={(e)=>{setMsg(e.target.value)}}
                />
                <button className="submit" type="submit">
                    <IoMdSend/>
                </button>
            </form>
        </Container>
    )
};

const Container = styled.div`
display: grid;
align-items: center;
grid-template-columns: 5% 95%;
background-color: #080420;
padding: 0 2rem;
@media screen and (min-width: 720px) and (max-width: 1080px) {
  padding: 0 1rem;
  gap: 1rem;
}
.button-container {
  display: flex;
  align-items: center;
  color: white;
  gap: 1rem;
  .emoji {
    position: relative;
    svg {
      font-size: 1.5rem;
      color: #ffff00c8;
      cursor: pointer;
    }
    .picker-container {
        position: absolute;
        top: -450px;
        height:800px;
        left: 0;
        z-index: 1;
      }
  }
}
.input-container {
  width: 100%;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  background-color: #ffffff34;
  input {
    width: 90%;
    height: 60%;
    background-color: transparent;
    color: white;
    border: none;
    padding-left: 1rem;
    font-size: 1.2rem;

    &::selection {
      background-color: #9a86f3;
    }
    &:focus {
      outline: none;
    }
  }
  button {
    padding: 0.3rem 2rem;
    border-radius: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #9a86f3;
    border: none;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      padding: 0.3rem 1rem;
      svg {
        font-size: 1rem;
      }
    }
    svg {
      font-size: 2rem;
      color: white;
    }
  }
}
`;