import productImage from "../assets/images.png";

const ProductItem = () => {
    return (
        <div className="product">
            <img src={productImage} alt="Product 1" />
            <h3>Product 1</h3>
            <p>$10.00</p>
            <button> Add to Cart</button>
        </div>
    );
};

export default ProductItem;