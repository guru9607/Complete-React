import React from 'react';
import ReactDOM from 'react-dom/client';



// React Components❤️:-
// 1) Class based components- OLD way - Uses javascript classes
// 2) Functional Components:- NEW way - Uses javascript functions


// React functional component❤️:-
// React functional component is a normal JS function that returns JSX code.🚀

// How it is written?
const HeadingComponent1 = ()=>{
    return <h1>Namaste-React from functional component</h1>
};

// without using return and {} :-
const HeadingComponent2 = () => <h1>Namaste-React from functional component</h1>

// using ();
const HeadingComponentT3 = () => (
    <h1>Namaste React from functional component🚀</h1>
);

/*
################################################################################3

So how to render the function component? :-

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponentThree/>);
################################################################################
*/

const data = api.getdata()
const Title = () => <h1>Namaste React component compsition</h1>;

// Component composition (component inside component)
const HeadingTitle = ()=>(
    <div>
        <h1>Namaste-React with component composition</h1>
        {data}    {/* Execute any js expression using curly brackets. Manages cross site scripting attack. Malicious data api send, and when we execute that data here, it can cause problems. JSX msnsges it*/} 
        <Title />
    </div>
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingTitle />);

/*
New Stuffs:
1)
<Title></Title> == <Title /> == {Title()}
*/