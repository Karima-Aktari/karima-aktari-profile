import React from 'react';
import lifeImage from '../../Images/React-Component-LifeCycle.png';
import codeImg2 from '../../Images/code-img2.JPG';

const MyBlogs = () => {
    return (
        <div className=" container bg-warning text-dark mx-auto my-5 py-4 rounded-3">
            <h1>Blog on React </h1>
            <div className="d-flex justify-content-center flex-column w-100 text-wrap p-4 fs-4">
                <p>
                    <b>1. JSX:</b> JSX stands for JavaScript syntax extension. It is a syntax extension to JavaScript.Using without any createElement() and/or appendChild() methods we can  write HTML elements in JavaScript and place them in the DOM with the help of JSX. It allows us to write HTML in React. It makes it easier to write and converts HTML tags into react elements.
                </p>
                <br />
                <p>
                    <b>2. Component Lifecycle:</b> Everything flows a cycle. React components also flow a life cycle. Each component in React has a lifecycle. The activities in its life cycle are monitoring and manipulating during its three main phases. The three phases are: Mounting, Updating, and Unmounting. It has another phases but not main and that is Initialization. Components are created that means mounted on the DOM, grow by updating, and then die means unmounted on the DOM. This is simply called the Component LifeCycle.
                </p>
                <img src={lifeImage} className="w-75 p-4  rounded-3" alt="" />
                <p><b>Image: React-component-Lifecycle</b></p>
                <p><b>3. Custom hooks:</b> A Custom Hook is a JavaScript function whose name starts with “use” . Custom Hooks are a method to reuse stateful logic in react. It allows us to have cleaner functional components, remove logic from the UI, and prevent code duplication by reusable hooks.
                </p>
                <img src={codeImg2} className="w-75 p-4  rounded-3" alt="" />
                <p>One important thing is we can call hooks only from react components. We can’t call  hooks inside loops, conditions, or nested functions. We have to use hooks at the top level of our React function always, before any returns. There are some kinds of react hooks: </p>
                <ul>
                    <li>useState</li>
                    <li>useEffect</li>
                    <li>useContext</li>
                    <li>useLayoutEffect</li>
                    <li>useCallback</li>
                    <li>useMemo</li>
                    <li>useRef</li>
                </ul>

                <p><b>4. Context API:</b> The Context API is a react structure and feature that allows us to share values and details and helps in prop-drilling without using props from one component to another of our application.
                    It works by storing data  in a central place and allowing access to any component that requests it. Using react createContext, we can create a context API and pass anything as an argument to the react component.

                    Finally we can say, The React Context API is a way for a React app to effectively produce global variables that helps to pass data through our component trees without using props.
                </p>
                <p><b>5. PropTypes:</b> PropTypes are a react's internal mechanism to ensure that components use the correct data type and pass the right data, use the right type of props, and receiving components receive the right type of props.</p>
                <p>In short, PropTypes is a way for setting up type checking to components. When props are passed to another react component, they are checked by the PropTypes against the type definitions.
                </p>
            </div>

        </div>
    );
};

export default MyBlogs;