import cellphones from '../../../src/images/cellphones.png'
import "../Image/image.css"

const Image = (e) => {
    return (
        <div className='cellphones'>
            <img  src={cellphones} alt="Imagem de fundo de celulares em operação financeira"/>
        </div>
    )
}

export default Image