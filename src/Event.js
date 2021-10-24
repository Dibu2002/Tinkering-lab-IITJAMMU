import React from "react";



const About = () => {
    return (
        <>
            <div className="my-5 about text-light bg-dark text-center">
                Being a technological institute, we aim to provide solutions with an entrepreneurial approach
                enabling economic and viable implementation and distribution of the solution to all those affected
                by it.
                For creativity to bloom, freedom to think and experiment is must. To ensure the same we will
                conduct events to and provide them with an infrastructure through which students could ‘own’ the
                solution.
                So, we envision conducting events which can be divided as beginner, intermediate and
                advanced to ensure maximum participation from students.

            </div>


            <div class="row">
                <div class="col-md-4">
                    <div class="card card-inverse card-primary cardi ">
                        <div class="card-block">
                            <h5 className="card-title">Beginner</h5>
                            <hr />
                            <li>Quizzes</li>
                            <li>Implement the Concept</li>
                            <li>Let's IoT Around</li>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card card-inverse card-primary cardi ">
                        <div class="card-block">
                            <h5 className="card-title">Intermediate</h5>
                            <hr />
                            <li>Tinker the Lab</li>
                            <li>Automatica</li>
                            <li>Un-Scrap the Lab</li>
                        </div>
                    </div>
                </div>


                <div class="col-md-4">
                    <div class="card card-inverse card-success cardi ">
                        <div class="card-block">
                            <h5 className="card-title">Advanced</h5>
                            <hr />
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