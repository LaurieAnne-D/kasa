import "./banner.css";

const Banner = ({ img, alt, txtAbout }) => {
    return (
        <header>
            <figure className="banner">
                <img src={img} alt={alt} />
                <figcaption>
                    <p className={`banner-txt ${txtAbout}`}>Chez vous,</p>
                    <p className={`banner-txt ${txtAbout}`}>partout et ailleurs</p>
                </figcaption>
            </figure>
        </header>
    );
};

export default Banner;