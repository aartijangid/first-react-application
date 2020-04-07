import React from 'react'

const Hello = () => {
    // return (<div>
    //     <h1>Hello Aarti</h1>
    // </div>)

    // using JSX
    return React.createElement(
        'div',
        {id: 'hello', className: 'helloClass'},
        React.createElement(
            'h1', null, 'Hello Aarti'
        )
    )
}

export default Hello