import React from "react";
import "./ExampleCard.scss"

/**
 *  This is the section for the ExampleCard showing what's expected.
 * @returns {JSX} React Component Example Card
 */
const ExampleCard = () => {

    return(
        <article className="box__card">
            <div className="box__card-img">
                <img src="/assets/placeholder.jpg" alt="Placeholder img" />
            </div>
            <div className="box__card-legend">
                <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sapiente, autem corporis iure officiis fugiat! Quaerat, nihil! Mollitia cupiditate, minus numquam, alias voluptate soluta pariatur impedit a tenetur suscipit dolor.</span>
            </div>
        </article>
    )
}

export default ExampleCard;