import React from 'react'
import './button.css'

const click =()=>{
    window.alert('Faça o login para usurfruir dos benefícios do Race Market')
}

const Button = (props) => {
    return (
        <button className='button_race' 
        onClick={() => click()}>
            {props.label}
        </button>
    )
}

export default Button

