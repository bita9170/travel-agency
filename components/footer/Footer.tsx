import React from "react";

function Footer() {
  const styles = {
    textContainer: {
      flex: 1,
      padding: "50px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",

      fontFamily: "Fira Sans",
    },
    ImageContainer: {
      flex: 2,
      height: "468px",
      backgroundImage: `url("https://assets.api.uizard.io/api/cdn/stream/d715e985-d7f0-46ac-907e-c6d06aac2649.png")`,
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },
    containerStyle: {
      width: "100%",
      height: "468px",
      backgroundColor: "#fff7e1",
      display: "flex",
      flexDirection: "row",
    },
    buttonStyle: {
      marginTop: "20px",
      cursor: "pointer",
      width: "111px",
      height: "33px",
      padding: "0px 8px",
      border: "0",
      borderRadius: "23px",
      backgroundColor: "#000000",
      color: "#ffffff",
      fontSize: "12px",
      fontFamily: "Fira Sans",
      fontWeight: 700,
      lineHeight: "15px",
      outline: "none",
    },
  };

  return (
    <div
      style={{
        width: "1440px",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      {/* Container to center the content */}
      <div style={styles.containerStyle}>
        <div style={styles.textContainer}>
          <div style={{ marginLeft: "150px" }}>
            <h1
              style={{
                fontSize: "40px",
                fontWeight: "500",
                lineHeight: "52px",
              }}
            >
              Travelers Choice
              <br /> Awards Best of <br /> the Best
            </h1>
            <p>
              Among our top 1% of places, stays, <br />
              eats, and experiences—decided by you.
            </p>
            <button style={styles.buttonStyle}>See the winners</button>
          </div>
        </div>
        <div style={styles.ImageContainer} />
      </div>
      <div
        style={{
          width: "100%",
          height: "20vh",
          backgroundColor: "white",
          marginTop: "40px",
        }}
      >
        <p
          style={{
            color: "#000000",
            fontSize: "17px",
            fontFamily: "Fira Sans",
            fontWeight: 700,
            lineHeight: "32px",
            marginLeft: "200px",
          }}
        >
          Trending in Travel
        </p>
        <div style={{ display: "flex", gap: "20px", marginLeft: "200px" }}>
          <p
            style={{
              color: "#000000",
              fontSize: "10px",
              fontFamily: "Fira Sans",
              fontWeight: "600",
              lineHeight: "18px",
              textUnderlinePosition: "2px",
              marginTop: "5px",
            }}
          >
            Spring Destinations
          </p>
          <p
            style={{
              color: "#000000",
              fontSize: "10px",
              fontFamily: "Fira Sans",
              fontWeight: "600",
              lineHeight: "18px",
              marginTop: "5px",
            }}
          >
            Sommer Destinations
          </p>
        </div>
        <div
          style={{
            display: "flex",
            gap: "50px",
            alignContent: "center",
            marginLeft: "200px",
          }}
        >
          <table
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "14px",
            }}
          >
            <td>Nashville</td>
            <td>Charleston</td>
            <td>Sedana</td>
            <td>New Orleans</td>
            <td>Washington DC</td>
          </table>
          <table
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "14px",
            }}
          >
            <td>Nashville</td>
            <td>Charleston</td>
            <td>Sedana</td>
            <td>New Orleans</td>
            <td>Washington DC</td>
          </table>
          <table
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "14px",
            }}
          >
            <td>Nashville</td>
            <td>Charleston</td>
            <td>Sedana</td>
            <td>New Orleans</td>
            <td>Washington DC</td>
          </table>
          <table
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "14px",
            }}
          >
            <td>Nashville</td>
            <td>Charleston</td>
            <td>Sedana</td>
            <td>New Orleans</td>
            <td>Washington DC</td>
          </table>
        </div>
      </div>
      <div
        style={{ width: "100%", height: "30vh", backgroundColor: "#faf1ed" }}
      >
        <div
          style={{
            display: "flex",
            gap: "50px",
            alignContent: "center",
            marginLeft: "200px",
          }}
        >
          <div style={{ marginTop: "50px", display: "flex", gap: "40px" }}>
            <table
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "14px",
              }}
            >
              <p
                style={{
                  color: "#333333",
                  fontSize: "14px",
                  fontFamily: "Fira Sans",
                  lineHeight: "18px",
                  marginBottom: "10px",
                }}
              >
                About BiHamTha
              </p>
              <td>About Us</td>
              <td>Press</td>
              <td>Resourcs and Policies</td>
              <td>Careers</td>
              <td>Investor Relations</td>
              <td>Trust & Safety</td>
              <td>Contact Us</td>
              <td>Accessibility Statement</td>
            </table>
            <table
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "14px",
              }}
            >
              <p
                style={{
                  color: "#333333",
                  fontSize: "14px",
                  fontFamily: "Fira Sans",
                  lineHeight: "18px",
                  marginBottom: "10px",
                }}
              >
                Explore
              </p>
              <td>About Us</td>
              <td>Press</td>
              <td>Resourcs and Policies</td>
              <td>Careers</td>
              <td>Investor Relations</td>
              <td>Trust & Safety</td>
              <td>Contact Us</td>
              <td>Accessibility Statement</td>
            </table>
            <table
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "14px",
              }}
            >
              <p
                style={{
                  color: "#333333",
                  fontSize: "14px",
                  fontFamily: "Fira Sans",
                  lineHeight: "18px",
                  marginBottom: "10px",
                }}
              >
                Do Business With Us
              </p>
              <td>About Us</td>
              <td>Press</td>
              <td>Resourcs and Policies</td>
              <td>Careers</td>
              <td>Investor Relations</td>
              <td>Trust & Safety</td>
              <td>Contact Us</td>
              <td>Accessibility Statement</td>
            </table>
            <table
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "14px",
              }}
            >
              <p
                style={{
                  color: "#333333",
                  fontSize: "14px",
                  fontFamily: "Fira Sans",
                  lineHeight: "18px",
                  marginBottom: "10px",
                }}
              >
                BiHamTha Sites
              </p>
              <td>discover your dream destination with Jetsetter</td>
              <td>Book the best restaurants with TheFork</td>
              <td>Book tours and attraction tickets on Viator</td>
              <td>React cruise reviews on Cruise Critic</td>
              <td>Get airline seating charts on Seat Guru</td>
              <td>Find vacation rentals on FlipKey</td>
              <td>Search for holiday rentals on Holiday Lettings</td>
              <td>Plan and book your next trip with Reco Trip Designers</td>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
