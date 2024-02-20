import "./banner.css";

const Banner = ({ img, alt, }) => {
    return (
        <header>
            <figure className="banner">
                <img src={img} alt={alt}/>
                <figcaption>Chez vous,<br />
                    partout et ailleurs </figcaption>
            </figure>
        </header>
    );
};

export default Banner;