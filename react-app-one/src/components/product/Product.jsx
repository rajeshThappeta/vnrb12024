import './Product.css';

function Product(props){ //{ p :{id,image,desc}}
    //state
    return(
        <div className='card text-center h-100 p-3 bg-light'>
           
            <img src={props.p.image} className='product-img' alt="" />
            <div className="card-body">
            <p className='fs-3'>Product id - {props.p.id}</p>
            <p className='lead'>Product id - {props.p.title}</p>
            <p className='fs-4'>Product id - {props.p.price}</p>
            </div>
        </div>
    )
}

export default Product;