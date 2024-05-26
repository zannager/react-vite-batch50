const MyComponent = ({name, age, address, occupation="IT"}) => {
    if(!name) throw "name is required"
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