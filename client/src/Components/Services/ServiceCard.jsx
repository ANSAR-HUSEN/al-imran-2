import React from 'react'
import './Services.css'

function ServiceCard({title,desc}) {
  return (
    <>
    <div className="services__container">
            <h3>{title}</h3>
            <div className="services__inclined__container">
                <div className="services__inclined"></div>
                <div className="services__content">{desc}</div>
            </div>
        </div>

    </>
  )
}

export default ServiceCard