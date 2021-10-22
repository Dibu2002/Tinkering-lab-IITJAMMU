import React, { useState } from "react";

const Contact = () => {

    return (
        <>
            <div className="my-5">
                <h1 className="text-center text-light">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <table className="table table-dark contable">

                        <tbody>
                            <tr className="onecont">
                                <td><h4>Prof. Rakesh Singhai</h4></td>
                                <td><h5><a  href="mailto: rakesh.singhai@iitjammu.ac.in">rakesh.singhai@iitjammu.ac.in</a></h5>
                                </td>
                            </tr>
                            
                            <tr>
                                <td><h4>Dr. Amit Kumar Singh</h4></td>
                                <td> <h5><a href="mailto: amit.singh@iitjammu.ac.in">amit.singh@iitjammu.ac.in</a></h5></td>
                            </tr>
                            <tr>
                                <td><h4>Prashant Kumar Sagar</h4></td>
                                <td> <h5><a href="mailto: 2018UCE0055@iitjammu.ac.in">2018uce0055@iitjammu.ac.in</a></h5></td>
                            </tr>
                        </tbody>
                    </table>
{/* 
                    <div className="text-white bg-secondary mx-auto">
                        <h1>Prof. Rakesh Singhai</h1>
                        <h5><a className="text-success" href="mailto: rakesh.singhai@iitjammu.ac.in">rakesh.singhai@iitjammu.ac.in</a></h5>
                    </div>

                    <div className="text-primary mx-auto">
                        <h1>Dr. Amit Kumar Singh</h1>
                        <a href="mailto: amit.singh@iitjammu.ac.in">amit.singh@iitjammu.ac.in</a>
                    </div>

                    <div className="text-primary mx-auto">
                        <h1>Prashant Kumar Sagar</h1>
                        <a href="mailto: 2018UCE0055@iitjammu.ac.in">2018UCE0055@iitjammu.ac.in</a>
                    </div> */}

                </div>
            </div>

        </>
    )
}

export default Contact;