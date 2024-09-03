import C from './C'

function B(props){
    console.log(props); //{ x : 100,username:"ravi"}
   
    return(
        <div className="b">
            <h1>Component B</h1>
            <h2>Data from Parent is {props.x}</h2>
            <h2>{props.username}</h2>
            {/* nest component C here */}
            <C />
        </div>
    )
}

export default B;