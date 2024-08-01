import ProductItem from "./ProductItem";

const ProductsList = () => {
    return (
        <main>
            <section id="products" className="container">
                <h2>Our Products</h2>
                <div className="product-list">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </section>
        </main>
    );
};

export default ProductsList;