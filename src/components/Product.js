import 'bootstrap/dist/css/bootstrap.css';

const Product = (props) => {

    const products = props.listItems.filter( product => product.mainImage);
    return (
        <div className="row">
            {
            products.map(product => {

               return (
                
                <div className="col-lg-4 col-md-6 col-sm-12 my-3" key={product.name[product.name.length -1]}>
                    <div className="card">
                    <span className="launch-date">{product.launchDate.substring(0, product.launchDate.indexOf('T'))}</span>
                        <img className="card-img-top" src={product.mainImage.original} alt="Card cap" />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <h6>{product.price.currency} {product.price.amount}</h6>
                                <h6>{product.gender}</h6>
                            </div>
                        <a href={product.link} className="btn btn-dark btn-lg btn-block rounded-0">
                            {product.launchesOn === "website" ? "Buy Now" : "View Raffle"}
                        </a>
                    </div>
                </div>

               )
               
            })
            }
        </div>
    )
}

export default Product;