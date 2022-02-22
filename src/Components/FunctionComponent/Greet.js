import React from "react";

// function Greet(props) {
//     return (
//        <h1> He is {props.name} and his profasion is{props.profasion}</h1>
//     )
// }

// export const Greet = ({name, profasion}) => {
//     return(
//         <h1> He is {name} and his profasion is {profasion} </h1>
//     )
// }

export const Greet = (props) => {
    const {name, profasion} = props;
    return (
        <div>
            <h1> He is {name} and his profasion is {profasion} </h1>
        </div>
    )
}

export default Greet;