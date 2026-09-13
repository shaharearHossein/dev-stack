function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-brand" id="about">
          <a className="brand footer-brand-link" href="#home">
            <span className="brand-mark">DS</span>
            <span className="brand-name">Dev<span>Stack</span></span>
          </a>
          <p>
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="footer-column">
          <h4>PRODUCT</h4>
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
        </div>

        <div className="footer-column" id="projects">
          <h4>COMPANY</h4>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#about">Careers</a>
        </div>

        <div className="footer-column">
          <h4>LEGAL</h4>
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms of Service</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;