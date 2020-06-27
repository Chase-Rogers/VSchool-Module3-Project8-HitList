import React from 'react'

const Target = (props) => {

    
    // console.log(props.colors)
    return (
    <div className='target' >
        <img src={props.image}/>
        <h1> {props.name} </h1>
    </div>
    )

}

export default Target