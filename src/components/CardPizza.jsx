import React from 'react'

const CardPizza = (props) => {
    return (
        <div class="mt-5 card mx-2">
            <img src={props.img} className="card-img-top" alt="Plumon" />
            <div className="card-body">
                <h4 className="card-title text-start fw-semibold mb-3">Pizza {props.name}</h4>
                <hr className='hr-card' />
                <p className="text-center card-text h4 fw-light">Ingredientes:</p>
                <p className="text-center card-text h6 fw-semibold">🍕 {props.ingredients}</p>
                <hr className='hr-card'/>
                <p className="text-center card-text h3">Precio: ${props.price}</p>
                <div className="d-flex justify-content-around w-100 mt-4">
                    <button type="button" className="btn btn-outline-secondary  me-2 btn-ver">
                        Ver Más👀
                    </button>
                    <button type="button" className="btn btn-dark btn-añadir">
                        Añadir🛒
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardPizza