function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-copy">
          <span className="eyebrow">A CURATED DEVELOPER TOOLKIT</span>
          <h2>
            Build your stack with
            <span> confidence.</span>
          </h2>
          <p>
            Discover practical technologies for frontend, backend, databases,
            styling, languages, DevOps, and modern product development.
          </p>

          <div className="hero-actions">
            <a className="primary-btn" href="#technologies">
              Explore Technologies
            </a>
            <a className="secondary-btn" href="#about">
              Learn More
            </a>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-glow"></div>
          <img
            src="/assets/dev-stack-visual.webp"
            alt="Futuristic developer technology stack illustration"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;