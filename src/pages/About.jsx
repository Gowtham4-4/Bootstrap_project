import React from "react";

function About() {
  return (
    <main>
      {/* About Section */}
      <section className="py-5 bg-light text-center">
        <div className="container">
          <h1 className="mb-4">About This Project</h1>
          <p className="lead">
            This project was built to practice and showcase the power of{" "}
            <strong>Bootstrap 5</strong>.  
            The goal is to design clean, modern, and responsive web pages by
            combining Bootstrap’s ready-to-use components.
          </p>
          {/* Modal Trigger */}
          <button
            type="button"
            className="btn btn-primary mt-3"
            data-bs-toggle="modal"
            data-bs-target="#projectModal"
          >
            Learn More About This Project
          </button>
        </div>
      </section>

      {/* Modal */}
      <div
        className="modal fade"
        id="projectModal"
        tabIndex="-1"
        aria-labelledby="projectModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="projectModalLabel">
                Project Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-start">
              <p>
                This project was created as part of a hands-on task to learn
                Bootstrap 5. The key focus areas include:
              </p>
              <ul>
                <li>Using Bootstrap components like navbars, cards, and modals</li>
                <li>Designing responsive layouts for mobile, tablet, and desktop</li>
                <li>Combining UI elements into visually appealing pages</li>
                <li>Hosting the site with GitHub Pages or Netlify</li>
              </ul>
              <p>
                By working on this, we gain real-world practice with{" "}
                <strong>UI/UX design</strong> and improve our understanding of
                modern frontend development.
              </p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services / Features Cards */}
      <section className="py-5">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-primary text-white">Navigation</div>
                <div className="card-body">
                  <h5 className="card-title">Navbar & Layouts</h5>
                  <p className="card-text">
                    The project demonstrates how to build simple yet powerful
                    navigation menus and responsive layouts using Bootstrap’s grid
                    system.
                  </p>
                  <a href="/" className="btn btn-outline-primary">
                    View Example
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-success text-white">Components</div>
                <div className="card-body">
                  <h5 className="card-title">Cards & Carousels</h5>
                  <p className="card-text">
                    Bootstrap cards and carousels are used to highlight content
                    and display projects attractively, with hover effects and
                    responsive sizing.
                  </p>
                  <a href="/about" className="btn btn-outline-success">
                    View Example
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm h-100">
                <div className="card-header bg-info text-white">Forms</div>
                <div className="card-body">
                  <h5 className="card-title">Contact Forms</h5>
                  <p className="card-text">
                    The contact page demonstrates Bootstrap’s form controls with
                    validation-friendly fields for name, email, and messages.
                  </p>
                  <a href="/contact" className="btn btn-outline-info">
                    View Example
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;
