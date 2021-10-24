import React from "react";

const Card = (props) => {
    return (
        <>
            {/* <div className="container-fluid mb-5">
                                <div className="card" >
                                    <img className="card-img-top" src={props.img} alt="Card image cap"/>
                                    <div className ="card-body1">
                                    <h5 className ="card-title mt-2">{props.title}</h5>
                                    <p className ="card-text mb-2">{props.text}</p>
                                    </div>
                                </div>
                            </div> */}

            <div class="col-md-4">
                <div class="card card-inverse card-primary carditeam text-center bg-light ">
                    <div class="card-team">
                        <img className="card-img-top my-2" src={props.img} alt="Card image cap" />
                        <div className="card-body1">
                            <h5 className="card-title mt-2 ">{props.title}</h5>
                            <p className="card-text-team mb-2">{props.text}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;