import React from 'react'

const Header = () => {
    return (
        <section className="headerPizza position-relative d-flex flex-column justify-content-center align-items-center text-center">
            <div className="headerOverlay"></div>
            <h1 className="headerText display-5 fw-normal mb-2">¡Pizzería Mamma Mia!</h1>
            <p className="headerText mb-3">¡Tenemos las mejores pizzas que podras encontrar!</p>
            <hr className="w-50 mx-auto" />
        </section>
    )
}

export default Header