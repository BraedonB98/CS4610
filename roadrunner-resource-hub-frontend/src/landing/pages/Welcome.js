import React  from "react";
import Card from "../../shared/components/UIElements/Card";
import '../../student_resources/pages/styling/StudentResources.css';

const Welcome = () => {
    return (
        <React.Fragment>
            <div className="page-welcometext">

                <h1>Welcome to the Roadrunner Resource Hub!</h1>
                <p>Here you will find common resources for all your academic needs. 
                    Whether you are a freshman sophomore, junior or a senior! </p>

            </div>

            <div className="welcome-container"> 
            {/* This is the container for the cards, put all the cards in here to make them appear in a row */}

            <Card {...{style: {width: '30%', margin: '1.5rem' }} }>
                <h2>Canvas</h2>
                <p>Canvas is the Learning Management System used by MSU Denver. 
                    Here you can access your courses, submit assignments, and communicate with your professors.</p>
            </Card>

            <Card {...{style: {width: '30%', margin: '1.5rem'}}}>
                <h2>Student Hub</h2>
                <p>The Student Hub is a one-stop-shop for all your student needs. 
                    Here you can access your email, register for classes, and access your financial aid information.</p>
            </Card>

            <Card {...{style: {width: '30%', margin: '1.5rem'}}}>
                <h2>Library</h2>
                <p>The MSU Denver Library is a great resource for all your research needs. 
                    Here you can access books, articles, and other resources to help you succeed in your classes.</p>
            </Card>

            <Card {...{style: {width: '30%', margin: '1.5rem'}}}>
                <h2>Academic Advising</h2>
                <p>Academic Advising is a great resource for all your academic needs. 
                    Here you can get help with course selection, degree planning, and other academic concerns.</p>
            </Card>

            </div>

        </React.Fragment>
    )
}

export default Welcome;