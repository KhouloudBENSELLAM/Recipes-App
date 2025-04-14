import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function CardChief({chief}){
    return(
        <div className="chief-card">
            <img src={chief.img} alt="" />
            <div className="chief-card-info">
                <h2 className="chief-card-name">{chief.name}</h2>
                <p className="chief-recipe-count">Recipes: <b>{chief.receipeCount}</b></p>
                <p className="chief-cuisine">Cuisine: <b>{chief.cuisine}</b></p>
                <p className="chief-icons">
                    <FontAwesomeIcon icon={faFacebook}/>
                    <FontAwesomeIcon icon={faTwitter}/>
                    <FontAwesomeIcon icon={faInstagram}/>
                </p>
            </div>
        </div>
    )
}