import InputActionBtn from './InputActionBtn'
import { useRef } from 'react';
import { useState } from 'react';

export default function SearchBar({messages, setMessages}){
    const textbox = useRef(null);
    const [lines, setLines] = useState(0);

    function handleInput(){
        setLines(Math.ceil((textbox.current.value.length*10)/textbox.current.offsetWidth));
    }

    function handleSendBtnClick(){
        let msgs = [...messages, {type:'user' , message:textbox.current.value}];
        setMessages(msgs);
        textbox.current.value = '';
    }

    return(
        <div className="search-bar-div">
            <textarea className="search-bar-input" ref={textbox} onInput={handleInput} placeholder='Ask me anything' style={{height: (lines+1)*1.5+'rem',}}>
            </textarea>
            <div className='action-btn-container'>
                <InputActionBtn onClick = {()=>{handleSendBtnClick(); handleInput();}} id='chatbot-enter-btn' content={<span className="material-symbols-outlined">arrow_upward</span>}/>
                <InputActionBtn id='chatbot-voice-input-btn' content={<span className="material-symbols-outlined">mic</span>}/>
            </div>
        </div>
    )
}