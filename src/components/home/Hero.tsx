"use client";

const Hero = () => {
  return (
    <div
      id="hero"
      className="hero route bg-image"
      style={{
        backgroundImage: `url(https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`,
      }}
    >
      <div className="overlay-itro" />
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">I am Obed.</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
