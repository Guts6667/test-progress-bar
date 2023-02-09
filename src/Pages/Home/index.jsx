import React from "react";
import ExampleCard from "../../Components/ExampleCard";
import TestSection from "../../Components/TestSection";
import "./Home.scss"

/**
 *  This the page Home where everything's happening
 * @returns {JSX} React Component Home
 */
const Home = () => {

    return(
        <div className="container__home">
            <div className="container__home-title">
                <h1>WEB ATRIO </h1>
                <p>This project has been realized by Rayan Chambet in the context of a technical test made by <strong>Web Atrio.</strong><br/>
                The goal is to create a progress bar similar to the example shared by the evaluator.
                You can find the example in the picture below 👇
                </p>
            </div>
            <ExampleCard />
            <TestSection />
        </div>
    )
}

export default Home;