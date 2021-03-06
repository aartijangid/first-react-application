import React from 'react'
// Functional Component
//function Greet() {
//     return <h1>Hello World</h1>
//}

const Greet = (props) => {
    
    //console.log(props)
    const {name, hobby} = props
    return (
    <div>
        <h1>
            {/* Functional Component {props.name} likes {props.hobby} */}
            Functional Component {name} likes {hobby}
        </h1>
        {props.children}
    </div>)
}
 
 export default Greet