import Navigation from "./Navigation";

const Header = () => {
    return (
        <header>
        <div className="container">
            <div className="logo">
                <h1>E-Commerce Store</h1>
            </div>
            <Navigation />
        </div>
    </header>
    );
};

export default Header;