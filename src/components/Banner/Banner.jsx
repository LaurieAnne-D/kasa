import "./banner.css";

const Banner = ({ img, alt, }) => {
    return (
        <header>
            <figure className="banner">
                <img src={img} alt={alt} />
                <figcaption>
                    <p>Chez vous,<br />
                        partout et ailleurs</p>
                </figcaption>
            </figure>
        </header>
    );
};

export default Banner;