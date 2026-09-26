// import { useState } from "react";
// import { NavLink } from "react-router-dom";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const closeMenu = () => {
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <NavLink to="/" className="brand" onClick={closeMenu}>
//         <span className="brand-symbol">✦</span>
//         ABBIR<span>.EXE</span>
//       </NavLink>

//       <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
//         <NavLink to="/" onClick={closeMenu}>
//           HOME
//         </NavLink>

//         <NavLink to="/about" onClick={closeMenu}>
//           ABOUT
//         </NavLink>

//         <NavLink to="/projects" onClick={closeMenu}>
//           PROJECTS
//         </NavLink>

//         <NavLink to="/certifications" onClick={closeMenu}>
//           CERTIFICATIONS
//         </NavLink>

//         <NavLink to="/contact" onClick={closeMenu}>
//           CONTACT
//         </NavLink>
//       </div>

//       <div className="nav-status">
//         <span className="status-dot" />
//         SYSTEM ONLINE
//       </div>

//       <button
//         className={`menu-toggle ${menuOpen ? "menu-active" : ""}`}
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle navigation menu"
//       >
//         <span />
//         <span />
//         <span />
//       </button>
//     </nav>
//   );
// }

// export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">

      <NavLink
        to="/"
        className="brand"
        onClick={closeMenu}
      >
        <span className="brand-symbol">✦</span>
        ABBIR<span>.EXE</span>
      </NavLink>

      <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>

        <NavLink
          to="/"
          end
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-active" : ""
          }
        >
          HOME
        </NavLink>

        <NavLink
          to="/about"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-active" : ""
          }
        >
          ABOUT
        </NavLink>

        <NavLink
          to="/projects"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-active" : ""
          }
        >
          PROJECTS
        </NavLink>

        <NavLink
          to="/certifications"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-active" : ""
          }
        >
          CERTIFICATIONS
        </NavLink>

        <NavLink
          to="/contact"
          onClick={closeMenu}
          className={({ isActive }) =>
            isActive ? "nav-active" : ""
          }
        >
          CONTACT
        </NavLink>

      </div>

      <div className="nav-status">
        <span className="status-dot" />
        SYSTEM ONLINE
      </div>

      <button
        className={`menu-toggle ${menuOpen ? "menu-active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        <span />
        <span />
        <span />
      </button>

    </nav>
  );
}

export default Navbar;