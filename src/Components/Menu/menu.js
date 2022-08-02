import React from "react"
import "../Menu/menu.css"
import Image from "../Image/image"

const Menu = () => {
    return (
        <div className="general_menu">
            <div>
                <div className="menu_sets">
                    <h3 className="item">Mercado</h3>
                    <h3 className="item">Conta</h3>
                    <h3 className="item">Corridas em andamento</h3>
                    <h3 className="item">Corridas finalizadas</h3>
                    <h3 className="item">Corridas futuras</h3>
                    <h3 className="item">Moedas</h3>
                </div>

                <div className="menu_invitation">
                    <h3 className="item">Convide Amigos</h3>
                </div>

                
            </div>

            <div>
                <Image/>
            </div>
        </div>
    )
}

export default Menu