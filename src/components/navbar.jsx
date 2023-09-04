import './../styles/App.css'
import { useState } from 'react'
export default function Nav(){
    const [text, setText] = useState('open')
    function menu(){
        if(text == 'open'){
            document.getElementById('mn').classList='menu1'
            setText('close')
        }else{
            document.getElementById('mn').classList='menu'
            setText('open')
        }
    }
    return(
        <>
            <nav className="navbar" id='nv'>
                <h1 className='logo'>logo</h1>
                <h1 className="open" id="op" onClick={menu}>{text}</h1>
                <ul className="menu" id='mn'>
                    <li className="links">home</li>
                    <li className="links">services</li>
                    <li className="links">contact</li>
                </ul>
                <button className='button' id='btn1'> log in </button>
            </nav>
        </>
    )
}