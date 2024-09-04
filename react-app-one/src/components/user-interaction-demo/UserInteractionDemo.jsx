function UserInteractionDemo(){

    //event handling function
    function handleClick(){
        console.log("click event occurred")
    }

    function handleAnotherEvent(x){
        console.log("another event occured and x is ",x)
    }

    return(
        <div className="text-center">
            <h2 className="display-3">User interaction demo component</h2>
            <button className="btn btn-success" onClick={handleClick}>Click </button>
            <button className="btn btn-danger" onClick={()=>handleAnotherEvent(120)}>Another click</button>
        </div>
    )
}

export default  UserInteractionDemo;