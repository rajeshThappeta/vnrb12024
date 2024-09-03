import B from './B'

function A(){

    //state
     let x=100;
     let username="ravi";

    return(
        <div className='a'>
            <h1>Component A</h1>
            {/* nest component B here */}
            <B x={x} username={username} />
        </div>
    )
}

export default A;