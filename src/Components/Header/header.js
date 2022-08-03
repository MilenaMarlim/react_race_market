import React from 'react'
import '../Header/header.css'

const Header = (props) => {
    return (
        <div className='general_header'>
            <div className='header_title'>
                <h1 className='item'> {props.title} </h1>
            </div>

            <div className='access'>
                <h2 className='item'>Acesso</h2>
                <h2 className='item'>Conectar Carteira</h2>
            </div>

        </div>
    )
}

export default Header