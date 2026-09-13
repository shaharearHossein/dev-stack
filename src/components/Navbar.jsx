import { useState } from "react";

function Navbar() {
  var [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="navbar">
      <div className="nav-inner">
        <button
          className="hamburger"
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={function () {
            setOpen(!open);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">DS</span>
          <span className="brand-name">Dev<span>Stack</span></span>
        </a>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#technologies" onClick={closeMenu}>Technologies</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <div className="auth-actions">
          <button className="signin" type="button">Sign In</button>
          <button className="signup" type="button">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;