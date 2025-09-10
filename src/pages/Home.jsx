import React from "react";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-light text-dark text-center py-5">
        <div className="container">
          <h1 className="display-4">Welcome to My Bootstrap 5 Site</h1>
          <p className="lead">
            Clean, responsive, and modern pages using Bootstrap 5 components.
          </p>
          <a href="/about" className="btn btn-primary btn-lg">
            Learn More
          </a>
        </div>
      </header>

      {/* Carousel Section */}
      <section className="py-4">
        <div className="container">
          <div
            id="carouselExample"
            className="carousel slide shadow rounded-3 overflow-hidden"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://picsum.photos/1000/350?random=1"
                  className="d-block w-100"
                  alt="Project 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://picsum.photos/1000/350?random=2"
                  className="d-block w-100"
                  alt="Project 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://picsum.photos/1000/350?random=3"
                  className="d-block w-100"
                  alt="Project 3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">
            Examples of Projects using Bootstrap
          </h2>
          <div className="row text-center">
            <div className="col-md-4">
              <div className="card shadow-sm p-4">
                <h3>Portfolio Website</h3>
                <p>
                  A responsive personal portfolio built with Bootstrap’s grid
                  and cards.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm p-4">
                <h3>Business Landing Page</h3>
                <p>
                  Showcase your company with hero sections, pricing, and contact
                  forms.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm p-4">
                <h3>Dashboard Template</h3>
                <p>
                  Interactive dashboards built using Bootstrap layouts and
                  utilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
