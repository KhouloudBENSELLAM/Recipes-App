import { Heart, Home } from "lucide-react";
import { Plus, Pencil, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar-container">
      <DesktopSidebar />
      <MobileSidebar />
    </aside>
  );
};

export default Sidebar;

const DesktopSidebar = () => {
  return (
    <div className="desktop-sidebar">
      <div className="sidebar-content">
        {/* Logo */}
        <div className="logo">
          <img src="/logo.svg" alt="logo" className="desktop" />
          <img src="/mobile-logo.svg" alt="logo" className="mobile" />
        </div>

        {/* Navigation */}
        <ul>
          <li>
            <Link to="/">
              <Home size={24} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <Heart size={24} />
              <span>Favorites</span>
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <Plus size={24} />
              <span>Add New Recipe</span>
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <Pencil size={24} />
              <span>Edit Recipe</span>
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <Trash size={24} />
              <span>Delete Recipe</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

const MobileSidebar = () => {
  return (
    <div className="mobile-sidebar">
      <Link to="/">
        <Home size={24} />
      </Link>
      <Link to="/favorites">
        <Heart size={24} />
      </Link>
    </div>
  );
};
