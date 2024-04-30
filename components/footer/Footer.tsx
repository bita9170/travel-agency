import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <div className="footer-container">
      <div className="top-section card">
        <h1 className="header">
          Travelers Choice
          <br /> Awards Best of <br /> the Best
        </h1>
        <p className="text">
          Among our top 1% of places, stays, <br />
          eats, and experiences—decided by you.
        </p>
        <button className="btn">See the winners</button>

        <div className="image"></div>
      </div>
      <h2>Trending in Travel</h2>

      <div
        className="flex gap-4  "
        style={{
          fontSize: "10px",
          fontFamily: "Fira Sans, sans-serif",
          marginLeft: "40px",
          fontWeight: 600,
        }}
      >
        <h3>Spring Destinations</h3>
        <h3>Summer Destinations</h3>
      </div>

      <div className="trending-travel">
        <ul className="list">
          <li>Nashville</li>
          <li>Charleston</li>
          <li>Sedona</li>
          <li>New Orleans</li>
          <li>Washington DC</li>
        </ul>

        <ul className="list">
          <li>Nashville</li>
          <li>Charleston</li>
          <li>Sedona</li>
          <li>New Orleans</li>
          <li>Washington DC</li>
        </ul>

        <ul className="list">
          <li>Nashville</li>
          <li>Charleston</li>
          <li>Sedona</li>
          <li>New Orleans</li>
          <li>Washington DC</li>
        </ul>

        <ul className="list">
          <li>Nashville</li>
          <li>Charleston</li>
          <li>Sedona</li>
          <li>New Orleans</li>
          <li>Washington DC</li>
        </ul>
      </div>

      <div className="bottom-sections">
        <div className="section">
          <h3>About Tripadvisor</h3>
          <ul>
            <li>About Us</li>
            <li>Press</li>
            <li>Resources and Policies</li>
            <li>Careers</li>
            <li>Investor Relations</li>
            <li>Trust & Safety</li>
            <li>Contact Us</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>

        <div className="section">
          <h3>Explore</h3>
          <ul>
            <li>About Us</li>
            <li>Press</li>
            <li>Resources and Policies</li>
            <li>Careers</li>
            <li>Investor Relations</li>
            <li>Trust & Safety</li>
            <li>Contact Us</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>

        <div className="section">
          <h3>Do Business With Us</h3>
          <ul>
            <li>About Us</li>
            <li>Press</li>
            <li>Resources and Policies</li>
            <li>Careers</li>
            <li>Investor Relations</li>
            <li>Trust & Safety</li>
            <li>Contact Us</li>
            <li>Accessibility Statement</li>
          </ul>
        </div>

        <div className="section">
          <h3>BiHamTha Sites</h3>
          <ul>
            <li>Discover your dream destination with Jetsetter</li>
            <li>Book the best restaurants with TheFork</li>
            <li>Book tours and attraction tickets on Viator</li>
            <li>Read cruise reviews on Cruise Critic</li>
            <li>Get airline seating charts on Seat Guru</li>
            <li>Find vacation rentals on Flipkey</li>
            <li>Search for holiday rentals on Holiday Lettings</li>
            <li>Plan and book your next trip with Reco Trip Designers</li>
          </ul>
        </div>
        <div className="footer-info flex  items-center p-3 mt-5">
          <p>© 2024 BiHamTha LLC All rights reserved.</p>

          <p>Term of Use</p>

          <p>Privacy and Cookies Statement</p>
        </div>

        <div className="social-icons flex space-x-4">
          {[
            {
              href: "https://twitter.com",
              src: "/twitter.png",
              alt: "Twitter",
            },
            {
              href: "https://twitter.com",
              src: "/twitter.png",
              alt: "Twitter",
            },
            {
              href: "https://twitter.com",
              src: "/twitter.png",
              alt: "Twitter",
            },
            {
              href: "https://twitter.com",
              src: "/twitter.png",
              alt: "Twitter",
            },
          ].map((icon, index) => (
            <a
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                style={{
                  position: "relative",
                  top: "50%",
                  left: "150%",
                }}
                src={icon.src}
                alt={icon.alt}
                width={25}
                height={25}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Footer;
