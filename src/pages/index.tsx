import React from "react";

const R = React;

export default function HomePage() {
  return (
    <div className="container">
      {/* Hero Section */}
      <header className="hero">
        <div className="hero-content">
          <div className="logo-wrapper">
            <div className="logo">
              <span className="logo-icon">
                <img src="/static/logo.webp" alt="Logo" />
              </span>
            </div>
          </div>
          <h1 className="hero-title">
            Cloudflare Pages
            <span className="gradient-text"> React Template</span>
          </h1>
          <p className="hero-subtitle">
            A modern, fast, and elegant starter template for building React
            applications on Cloudflare Pages with Frame Master
          </p>
          <div className="cta-buttons">
            <a href="#get-started" className="btn btn-primary">
              Get Started
            </a>
            <a
              href="https://developers.cloudflare.com/pages"
              className="btn btn-secondary"
            >
              Documentation
            </a>
          </div>
        </div>
        <div className="hero-glow"></div>
      </header>

      {/* Features Section */}
      <section className="features">
        <h2 className="section-title">Why Choose This Template?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Client-Side HMR</h3>
            <p>
              Hot Module Replacement for instant feedback during development
              without losing component state
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>Static Asset Bundling</h3>
            <p>
              Automatic bundling and optimization of static assets for
              production-ready deployments
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚀</div>
            <h3>Edge Deployment</h3>
            <p>
              Built on Cloudflare's edge network for blazing fast performance
              worldwide
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚛️</div>
            <h3>React Powered</h3>
            <p>
              Modern React with hooks, components, and all the features you love
            </p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔧</div>
            <h3>Easy to Customize</h3>
            <p>Well-structured codebase that's easy to modify and extend</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛠️</div>
            <h3>Frame Master</h3>
            <p>
              Integrated with Frame Master for powerful development workflows
              and plugin ecosystem
            </p>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <section id="get-started" className="get-started">
        <h2 className="section-title">Get Started</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Install Dependencies</h3>
            <code className="code-block">bun install</code>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Start Development</h3>
            <code className="code-block">bun dev</code>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Edit Your Page</h3>
            <code className="code-block">src/pages/index.tsx</code>
            <p className="step-hint">Start editing to see HMR in action!</p>
          </div>
        </div>

        <h3 className="deploy-title">Deploy to Cloudflare Pages</h3>
        <div className="deploy-options">
          <div className="deploy-card">
            <div className="deploy-icon">🐙</div>
            <h4>Via GitHub</h4>
            <ol className="deploy-steps">
              <li>Push your code to GitHub</li>
              <li>Go to Cloudflare Dashboard → Pages</li>
              <li>Click "Create a project"</li>
              <li>Connect your GitHub repository</li>
              <li>
                Set build command: <code>bun run build</code>
              </li>
              <li>
                Set output directory: <code>.frame-master/build</code>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="tech-stack">
        <h2 className="section-title">Tech Stack</h2>
        <div className="tech-badges">
          <span className="tech-badge">React</span>
          <span className="tech-badge">TypeScript</span>
          <span className="tech-badge">Cloudflare Pages</span>
          <span className="tech-badge">Frame Master</span>
          <span className="tech-badge">Bun</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Built with ❤️ using Frame Master</p>
        <p className="footer-links">
          <a href="https://github.com/shpaw415">GitHub</a>
          <span className="separator">•</span>
          <a href="https://cloudflare.com">Cloudflare</a>
          <span className="separator">•</span>
          <a href="#">Documentation</a>
        </p>
      </footer>
    </div>
  );
}
