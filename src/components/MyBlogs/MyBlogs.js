import React from 'react';
import lifeImage from '../../Images/React-Component-LifeCycle.png';
import codeImg2 from '../../Images/code-img2.JPG';

const MyBlogs = () => {
    return (
        <div>
            <h2 className="bg-dark text-light">MY BLOGS</h2>
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

            <div className=" container bg-success text-dark mx-auto my-5 py-4 rounded-3">
                <h1>Blog-Backend</h1>
                <div className="d-flex justify-content-left flex-column w-100 text-wrap p-4 fs-5">
                    <p>
                        <b>CRUD Operations:</b> CRUD is an acronym. CRUD stands for Create, Read, Update, and Delete. These are four primitive database operations of persistent storage. Each letter of CRUD can refer to all functions we use to implement persistent storage applications and relational database applications, including the Oracle Database,SQL Server, and  MySQL. <br />
                        For SQL each letter in the CRUD maps to insert, select, update, and delete, respectively.<br />
                        For the HTTP method each letter in the CRUD maps to POST (create), GET (read), PUT (create and update), and DELETE (delete).
                    </p>
                    <br />
                    <p>
                        <b>POST (create):</b> Create function performs the INSERT statement to create or add a new record. It allows us to add new rows and columns  to our table using Insert Into.Another thing is to create data collection in a REST environment, we use the HTTP POST method. POST creates a new data collection of the specified data type.
                        For example, if we want to add a new product item to the stored list of products for the store, and the product objects are stored in a products database and also want to create the new item, we would use a POST request.
                    </p>
                    <br />
                    <p>
                        <b> GET (read):</b> Reads function reads the table records based on the primary key noted within the input parameter. The read function is similar to a search function,  it allows us to retrieve specific resources and read their values. It  retrieves, searches, or views existing entries.<br />
                        To read resources in a REST environment, we use the GET method. Reading a resource should never change any information without retrieving it. If we call Get for 10 times for a specific resource we get the same information on the first call that we get on the last call.<br />
                        GET is used to read an entire list of items. It can also be used to read a specific item, when its id is specified in the request.
                    </p>
                    <br />
                    <p>
                        <b>PUT (create and update):</b> Update function Update, or edit existing entries. Update is how we change an existing record in the resource or record. We use this to edit existing records that exist in the database. When performing UPDATE, we need to define the target record in the database to be updated.<br />
                        PUT is the HTTP method used for the CRUD operation to Update. For example, if we want to update an existing product item to the stored list of products for the store, and the product objects are stored in a products database, we would use a PUT request.
                    </p>
                    <br />
                    <p>
                        <b> DELETE (delete):</b>  Delete function Delete, deactivate, or remove specific existing entries. It is used to remove a record from the database. Some relational database applications may permit a hard delete (permanent delete) or soft delete (update status).<br />
                        DELETE is the HTTP method used for the CRUD operation to delete. For example, if we want to delete or remove an existing product item to the stored list of products for the store, we would use a DELETE request.
                    </p>
                    <br />
                    <p>
                        Finally we can say in the HTTP method, if we want to create a new record we would use “POST”, to update a record, we would use “PUT” or “PATCH” and If we want to delete a record, we would use “DELETE.” Through CRUD, users and administrators had the access rights to edit, delete and create or browse online records.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default MyBlogs;