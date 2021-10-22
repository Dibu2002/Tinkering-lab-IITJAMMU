import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="container-fluid mb-5">
                                <div className="card" >
                                    <img className="card-img-top" src={props.img} alt="Card image cap"/>
                                    <div className ="card-body1">
                                    <h5 className ="card-title mt-2">{props.title}</h5>
                                    <p className ="card-text mb-2">{props.text}</p>
                                    </div>
                                </div>
                            </div>
        </>
    )
}

export default Card;