import React from "react";

const Hello=()=>{
    // return (
    //     <div className='DummyClass'>
    //         <h1>Hello Arpit Jain!!!!</h1>
    //     <div/>
    // )
    //the above is writing the components with the help of the JSX format
    // and at below the format will be without using the JSX format
    return React.createElement(
        'div',
        {id:'Hello',className:'DummyClass'},
        React.createElement('h1',null,'Hello Arpit Jain')
        );
}

export default Hello;