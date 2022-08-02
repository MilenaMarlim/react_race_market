import React from "react"
import "../Menu/menu.css"

const Menu = () => {
    return (
        <div className="general_menu">
            <div className="menu_sets">
                <h3 className="item">Mercado</h3>
                <h3 className="item">Conta</h3>
                <h3 className="item">Transferência</h3>
                <h3 className="item">Configurações</h3>
            </div>

            <div className="menu_invitation">
                <h3 className="item">Convide Amigos</h3>
            </div>

            <div className="menu_coin">
                <h3 className="item">Moeda</h3>
                <p className="item">USD</p>
            </div>
        </div>
    )
}

export default Menu