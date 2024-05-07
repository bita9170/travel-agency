"use client";
import React, { useState } from "react";
import Logo from "../elements/Logo";
import { Button } from "../ui/button";

function Footer() {
  const [openSection, setOpenSection] = useState<number | null>(null);

  const toggleSection = (index: any) => {
    setOpenSection(openSection === index ? null : index);
  };

  const sections = [
    {
      title: "About BiHamTha",
      links: [
        "About Us",
        "Press",
        "Resource and Policies",
        "Career",
        "Investor Relations",
        "Trust & Safety",
        "Contact Us",
        "Accessibility Statement",
      ],
    },
    {
      title: "Explore",
      links: [
        "About Us",
        "Press",
        "Resource and Policies",
        "Career",
        "Investor Relations",
        "Trust & Safety",
        "Contact Us",
        "Accessibility Statement",
      ],
    },
    {
      title: "Do Business With Us",
      links: [
        "About Us",
        "Press",
        "Resource and Policies",
        "Career",
        "Investor Relations",
        "Trust & Safety",
        "Contact Us",
        "Accessibility Statement",
      ],
    },
    {
      title: "BiHamTha Sites",
      links: [
        "Find press releases and media resources here.",
        "Read cruise reviews on Cruise Critic",
        "Get airline seating charts on Seat Guru",
        "Search for holiday rentals on Holiday Letting",
        "Search for holiday rentals on Holiday Letting",
        "Search for holiday rentals on Holiday Letting",
        "Find vacation rentals on FlipKey",
        "Plan and book your next trip with Reco Trip Designers",
      ],
    },
  ];

  return (
    <div className="footer-container mt-10 bg-[#faf1ed] py-8 px-4 xl:px-0">
      <div className="sm:flex h-custom-height mt-10 m-auto max-w-screen-xl">
        <div
          className="hidden sm:hidden md:grid grid-cols-4 w-full"
          style={{ fontSize: "10px" }}
        >
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg leading-5">{section.title}</h3>
              {section.links.map((link, linkIndex) => (
                <p key={linkIndex}>{link}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Dropdown for mobile - shown only on small screens */}
        <div className="md:hidden m-auto max-w-screen-xl">
          <div className="footer-top grid sm:grid-cols-4">
            {sections.map((section, index) => (
              <div key={index} className="section">
                <button
                  onClick={() => toggleSection(index)}
                  className="text-left w-full py-2 flex items-center"
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
        </div>
      </div>

      {/* Logo & Icons section */}
      <div className=" footer-bottom flex flex-col-reverse md:flex-row justify-between items-center gap-4 mt-6 m-auto max-w-screen-xl">
        <div className="flex space-x-6 items-center justify-start w-full">
          <Logo imageOnly={true} className="inline-block" />
          <div>
            <div>
              <p className="text-sm">
                © 2024 BiHamTha LLC All rights reserved.
              </p>
            </div>
            <div>
              <p className="space-x-2 underline font-semibold">
                <a href="/terms-of-use">Terms of Use</a>
                <a href="/privacy-policy">Privacy and Cookies Statement</a>
              </p>
            </div>
          </div>
        </div>

        {/* Icons start */}
        <div className="social-icons flex space-x-2 justify-end w-full">
          <Button asChild variant={"link"} className="px-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="fill-black"
            >
              <svg width="30" height="30" viewBox="0 0 512 512">
                <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path>
              </svg>
            </a>
          </Button>

          <Button asChild variant={"link"} className="px-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="fill-black"
            >
              <svg width="30" height="30" viewBox="0 0 512 512">
                <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
              </svg>
            </a>
          </Button>

          <Button asChild variant={"link"} className="px-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="fill-black"
            >
              <svg width="30" height="30" viewBox="0 0 512 512">
                <path d="M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"></path>
                space-x-6{" "}
              </svg>
            </a>
          </Button>

          <Button asChild variant={"link"} className="px-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="fill-black"
            >
              <svg width="30" height="30" viewBox="0 0 512 512">
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
          </Button>
        </div>
        {/* ICONS end */}
      </div>
    </div>
  );
}

export default Footer;
