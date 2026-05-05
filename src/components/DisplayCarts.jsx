import React from "react";
import { Link } from "react-router-dom";
import logement from "./logements.json"

const DisplayCarts = () => {
    return (
        <section className="gallery">
            {logement.map((logement) => (
                <Link to={`/logement/${logement.id}`} key={logement.id} className="gallery-card">
                    <div className="card-image-container">
                        <img src={logement.cover} alt={logement.title} className="card-image" />
                    </div>
                    <div className="card-title">
                        <h3>{logement.title}</h3>
                    </div>
                </Link>
            ))}
        </section>
    )
}
export default DisplayCarts;