import React from "react";
import rakesh from "../src/images/rakesh.png";
import amit from "../src/images/amit.png";
import prashant from "../src/images/prashant.png";
import Card from "./Card";
import Data from "./Data";


const Service = (props) => {
    return (
        <>
           <div className="my-5">
                <h1 className="text-center text-light">
                    Our Team
                </h1>
            </div>
            <div className="container-fluid mb-5">
                {/* <div className="row "> */}
                    {/* <div className="col-10 mx-auto"> */}
                        <div className="d-flex justify-content-around">
                    {Data.map((val, ind) => {
                        return <Card  key={ind} img={val.imgsrc} title={val.title} text={val.text} />
                    })}
                        {/* </div> */}

                    {/* </div> */}
                </div>
            </div>
                </>
                )
}

                export default Service;