import GrandChild from "./grandchild";
const Child = (props) => {

    return ( 
        <>
            <GrandChild props={props} printEmail={props.printEmail}/>
        </>
     );
}
 
export default Child;