const MyComponent = ({name, age, address, occupation="IT"}) => {
    return ( 
        <>
            <h2>Hello {name}</h2> 
            <p>age: {age}</p>
            <p>address: {address}</p>
            <p>occupation: {occupation}</p>
        </>
     );
}

export default MyComponent;