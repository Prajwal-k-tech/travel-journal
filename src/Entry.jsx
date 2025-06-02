//The Entry component

export default function Entry(props) {//usage of props
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img
                    className="main-image"
                    src={props.img.src}
                    alt={props.img.alt}
                />
            </div>
            <div className="info-container">
                <div className="location-info">
                    <span className="location-pin" aria-hidden="true">📍</span>
                    <span className="country">{props.country}</span>
                    <a href={props.googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h2 className="entry-title">{props.title}</h2>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    )
}


