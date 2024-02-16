import "./navbar.css";

const Navbar = ({ img, alt, }) => {
    return (
        <header>
            <figure>
                <img src={img} alt={alt} className="banner-img" />
                <figcaption> </figcaption>
            </figure>
        </header>
    );
};


export default Navbar;