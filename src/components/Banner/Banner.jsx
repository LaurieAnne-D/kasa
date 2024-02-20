import "./banner.css";

const Banner = ({ img, alt, }) => {
    return (
        <header>
            <figure>
                <img src={img} alt={alt} className="banner-img" />
                <figcaption>Chez vous,<br />
                    partout et ailleurs </figcaption>
            </figure>
        </header>
    );
};

export default Banner;