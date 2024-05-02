"use client";
import React, { useState } from "react";
import IconsFooter from "./IconsFooter";

// Define the structure of a section
interface Section {
  title: string;
  links: string[];
}

const Footer: React.FC = () => {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: number): void => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections: Section[] = [
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
        <div className="image mt-5"></div>
      </div>

      {/* Middle section */}
      <div className="trending-section ml-8 mb-5">
        <h2 className="font-bold mt-4">Trending in Travel</h2>

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
      <div className="h-100 bg-faf1ed p-50 mt-24">
        <div className="hidden md:block p-5">
          <div className="bottom-sections grid grid-cols-1 md:grid-cols-4 gap-2 p-2 ml-5">
            <div className="section">
              <h3 className="mb-2.5">About BiHamTha</h3>
              <p>About Us</p>
              <p>Press</p>
              <p>Resource and Policies</p>
              <p>Career</p>
              <p>Investor Relations</p>
              <p>Trust & Safety</p>
              <p>Contact Us</p>
              <p>Accessibility Statement</p>
            </div>

            <div className="section">
              <h3 className="mb-2.5">Explore</h3>
              <p>About Us</p>
              <p>Press</p>
              <p>Resource and Policies</p>
              <p>Career</p>
              <p>Investor Relations</p>
              <p>Trust & Safety</p>
              <p>Contact Us</p>
              <p>Accessibility Statement</p>
            </div>

            <div className="section">
              <h3 className="mb-2.5">Do Business With Us</h3>
              <p>About Us</p>
              <p>Press</p>
              <p>Resource and Policies</p>
              <p>Career</p>
              <p>Investor Relations</p>
              <p>Trust & Safety</p>
              <p>Contact Us</p>
              <p>Accessibility Statement</p>
            </div>

            <div className="section">
              <h3 className="mb-2.5">BiHamTha Sites</h3>
              <p>Find press releases and media resources here.</p>
              <p>Read cruise reviews on Cruise Critic</p>
              <p>Get airline seating charts on Seat Guru</p>
              <p>Search for holiday rentals on Holiday Letting</p>
              <p>Search for holiday rentals on Holiday Letting</p>
              <p>Search for holiday rentals on Holiday Letting</p>
              <p>Find vacation rentals on FlipKey</p>
              <p>Plan and book your next trip with Reco Trip Designers</p>
            </div>
          </div>
        </div>

        {/* Dropdown for mobile */}
        <div className="bottom-sections sm:flex md:hidden gap-12 p-2 ml-2">
          {sections.map((section, index) => (
            <div key={index} className="section">
              <button
                onClick={() => toggleSection(index)}
                className="toggle-button text-left w-full py-2 flex items-center "
              >
                <span className="toggle-icon px-1">
                  {openSection === index ? "-" : "+"}
                </span>
                <span className="px-1">{section.title}</span>
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

        {/* Icons Section */}
        <div className="flex justify-end items-center mt-5 px-5 bg-faf1ed">
          <IconsFooter />
        </div>

        {/* Footer Text */}
        <div className="flex mt-5 ml-10 text-xs">
          <p>© 2024 BiHamTha LLC All rights reserved.</p>
        </div>
        <div>
          <p className="flex text-sm ml-10 font-semibold">
            <a href="/terms-of-use" className="mr-5">
              Terms of Use
            </a>
            <a href="/privacy-policy">Privacy and Cookies Statement</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
