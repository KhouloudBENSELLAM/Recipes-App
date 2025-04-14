import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SideBar({ links , close }) {
    return (
        <div className="sidebar" onClick={close}>
            {links.map(link => (
                <Link to={link.path} className="sidebar-link active" key={link.name}>
                    <FontAwesomeIcon icon={link.icon} className="mr-2" />
                    {link.name}
                </Link>
            ))}
        </div>
    );
}
