import React, { useState } from "react";

const Contact = () => {

    return (
        <>
             <div className="my-5">
                <h1 className="text-center text-light head">Contact Us</h1>
            </div>
            <div class="row">
                <div class="col-md-4 card-block-con">
                    <div class="card card-inverse card-primary cardicon ">
                        <div >
                        <h4>Prof. Rakesh Singhai</h4>
                                <h5><a  href="mailto: rakesh.singhai@iitjammu.ac.in">rakesh.singhai@iitjammu.ac.in</a></h5>
                        </div>
                    </div>
                </div>

                <div class="col-md-4 card-block-con">
                    <div class="card card-inverse card-primary cardicon ">
                        <div >
                        <h4>Dr. Amit Kumar Singh</h4>
                                 <h5><a href="mailto: amit.singh@iitjammu.ac.in">amit.singh@iitjammu.ac.in</a></h5>
                        </div>
                    </div>
                </div>


                <div class="col-md-4 card-block-con">
                    <div class="card card-inverse card-primary cardicon ">
                        <div >
                        <h4>Prashant Kumar Sagar</h4>
                                 <h5><a href="mailto: 2018UCE0055@iitjammu.ac.in">2018uce0055@iitjammu.ac.in</a></h5>
                        </div>
                    </div>
                </div>

            </div>





        </>
    )
}

export default Contact;