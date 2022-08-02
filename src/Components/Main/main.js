import React from "react"
import "./main.css"

const Main = () => {
    return (
        <div className="main_container">
            <h2>Registro de Competições</h2>
            <h3 className="subtitle">Classificação de 2022</h3>
            <div>

                <table className="table">
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Piloto</th>
                            <th>Carro</th>
                            <th>Equipe</th>
                            <th>Evento</th>

                        </tr></thead>
                    <tr>
                        <td>1</td>
                        <td>Chase Elliot</td>
                        <td>Camaro</td>
                        <td>Chevrolet</td>
                        <td>Nascar Cup Series</td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>R. Blaney</td>
                        <td>Mustang</td>
                        <td>Ford</td>
                        <td>Nascar Cup Series</td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>R. Chastain</td>
                        <td>Camaro</td>
                        <td>Chevrolet</td>
                        <td>Nascar Cup Series</td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>M. Truex Jr.</td>
                        <td>Camry</td>
                        <td>Toyota</td>
                        <td>Nascar Cup Series</td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>K. Larson</td>
                        <td>Camaro</td>
                        <td>Chevrolet</td>
                        <td>Nascar Cup Series</td>
                    </tr>
                </table>

                <button className="button_race">CLique para ver outras corridas e eventos</button>

            </div>
        </div>
    )
}

export default Main