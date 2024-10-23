import React from 'react'
import classes from './Services.module.css'

function ServiceCard({title,desc}) {
  return (
    <>
    <div className={classes.services__container}>
            <h3>{title}</h3>
            <div className={classes.services__inclined__container}>
                <div className={classes.services__inclined}></div>
                <div className={classes.services__content}>{desc}</div>
            </div>
        </div>

    </>
  )
}

export default ServiceCard