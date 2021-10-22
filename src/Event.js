import React from "react";



const About = () => {
    return (
        <>
            <div className="my-5 about text-light">
                Being a technological institute, we aim to provide solutions with an entrepreneurial approach
                enabling economic and viable implementation and distribution of the solution to all those affected
                by it.
                For creativity to bloom, freedom to think and experiment is must. To ensure the same we will
                conduct events to and provide them with an infrastructure through which students could ‘own’ the
                solution.
                So, we envision conducting events which can be divided as beginner, intermediate and
                advanced to ensure maximum participation from .

            </div>

            <div className="my-5 list">

                <div className="aboutcard d-flex justify-content-around ">
                    <div className="cardi" >
                        <div className="card-body">
                            <h5 className="card-title">Beginner</h5>
                            <li>Quizzes</li>
                            <li>Implement the Concept</li>
                            <li>Let's IoT Around</li>
                        </div>
                    </div>
                    <div className="cardi" >
                        <div className="card-body">
                            <h5 className="card-title">Intermediate</h5>
                            <li>Tinker the Lab</li>
                    <li>Automatica</li>
                    <li>Un-Scrap the Lab</li>
                        </div>
                    </div>
                    <div className="cardi" >
                        <div className="card-body">
                            <h5 className="card-title">Advanced</h5>
                            <li>Dronothon</li>
                    <li>Sustainable-Days</li>
                    <li>Social Entrepreneurship</li>
                        </div>
                    </div>
                </div>
               

            </div>
        </>
    )

}

export default About;