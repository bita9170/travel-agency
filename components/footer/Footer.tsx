"use client";
import React, { useState } from "react";
import Image from "next/image";

function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "About Tripadvisor",
      links: [
        "About Us",
        "Press",
        "Resources and Policies",
        "Careers",
        "Investor Relations",
        "Trust & Safety",
        "Contact Us",
        "Accessibility Statement",
      ],
    },
    {
      title: "Explore",
      links: [
        "Discover your dream destination with Jetsetter",
        "Book the best restaurants with TheFork",
        "Book tours and attraction tickets on Viator",
        "Read cruise reviews on Cruise Critic",
        "Get airline seating charts on Seat Guru",
        "Find vacation rentals on Flipkey",
        "Search for holiday rentals on Holiday Lettings",
        "Plan and book your next trip with Reco Trip Designers",
      ],
    },
    {
      title: "Do Business With Us",
      links: [
        "Resources and Policies",
        "Careers",
        "Investor Relations",
        "Trust & Safety",
        "Contact Us",
      ],
    },
    {
      title: "BiHamTha Sites",
      links: [
        "Press",
        "Careers",
        "Investor Relations",
        "Trust & Safety",
        "Contact Us",
      ],
    },
  ];

  return (
    <div className="footer-container mt-10">
      <div className="top-section card p-5 flex flex-col md:flex-row items-center">
        <div className="text-container">
          <h1 className="header mb-3">
            Travelers Choice
            <br />
            Awards Best of the <br />
            Best
          </h1>
          <p className="text mb-4">
            Among our top 1% of places, stays, eats, and experiences—decided by
            you.
          </p>
          <button className="btn mb-5">See the winners</button>
        </div>
        <div className="image" style={{ marginTop: "20px" }}></div>
      </div>

      {/* Middle section */}
      <div className="trending-section ml-8 mb-5">
        <h2>Trending in Travel</h2>

        <div className="header-drei flex ">
          <div className="flex-1">
            <h3 className="underline mb-2">Spring Destinations</h3>
            <ul className="list">
              <li>Nashville</li>
              <li>Charleston</li>
              <li>Sedona</li>
              <li>New Orleans</li>
              <li>Washington DC</li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className=" mb-2">Spring Destinations</h3>
            <ul className="list hidden md:block">
              <li>Nashville</li>
              <li>Charleston</li>
              <li>Sedona</li>
              <li>New Orleans</li>
              <li>Washington DC</li>
            </ul>
          </div>

          <div className="flex-1 hidden md:block">
            <h3 className=" mb-2">Spring Destinations</h3>
            <ul className="list hidden md:block">
              <li>Nashville</li>
              <li>Charleston</li>
              <li>Sedona</li>
              <li>New Orleans</li>
              <li>Washington DC</li>
            </ul>
          </div>

          <div className="flex-1 hidden md:block">
            <h3 className=" mb-2">Spring Destinations</h3>
            <ul className="list hidden md:block">
              <li>Nashville</li>
              <li>Charleston</li>
              <li>Sedona</li>
              <li>New Orleans</li>
              <li>Washington DC</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div
        style={{
          height: "400px",
          backgroundColor: "#faf1ed",
          padding: "20px",
          marginTop: "100px",
        }}
      >
        <div
          className="bottom-sections  sm:flex"
          style={{ gap: "50px", padding: "10px", marginLeft: "20px" }}
        >
          {sections.map((section, index) => (
            <div key={index} className="section">
              <button
                onClick={() => toggleSection(index)}
                className="text-left w-full py-2 flex  items-center"
              >
                <span style={{ padding: "5px" }}>
                  {openSection === index ? "-" : "+"}
                </span>
                <span style={{ padding: "5px" }}>{section.title}</span>
              </button>
              {openSection === index && (
                <ul>
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>{link}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="social-icons flex space-x-4 mt-3 ml-auto justify-end ">
          {[
            {
              href: "https://twitter.com",
              src: "/twitter.png",
              alt: "Twitter",
            },
            {
              href: "https://facebook.com",
              src: "/facebook.png",
              alt: "Facebook",
            },
            {
              href: "https://www.pinterest.de/",
              src: "/pinterest.png",
              alt: "Pinterest",
            },
            {
              href: "https://instagram.com",
              src: "/insta.png",
              alt: "Instagram",
            },
          ].map((icon, index) => (
            <a
              style={{
                border: "2px solid black",
                borderRadius: "50%",
                padding: "5px",
              }}
              key={index}
              href={icon.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={icon.src} alt={icon.alt} width={25} height={25} />
            </a>
          ))}
        </div>
        <div style={{ display: "flex", marginTop: "20px", fontSize: "12px" }}>
          <p>© 2024 BiHamTha LLC All rights reserved.</p>
        </div>
        <div>
          <p style={{ display: "flex", fontSize: "14px", fontWeight: "500" }}>
            <a href="/terms-of-use" style={{ marginRight: "20px" }}>
              Terms of Use
            </a>
            <a href="/privacy-policy">Privacy and Cookies Statement</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
