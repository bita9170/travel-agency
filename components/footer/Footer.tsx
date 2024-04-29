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
      height: "468px", // Ensures the image container has the same height as the text container
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
      {" "}
      {/* Container to center the content */}
      <div style={styles.containerStyle}>
        <div style={styles.textContainer}>
          <h1
            style={{ fontSize: "40px", fontWeight: "500", lineHeight: "52px" }}
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
        <div style={styles.ImageContainer} />
      </div>
      <div style={{ width: "100%", height: "20vh", backgroundColor: "white" }}>
        <h4
          style={{
            color: "#000000",
            fontSize: "17px",
            fontFamily: "Fira Sans",
            fontWeight: 700,
            lineHeight: "32px",
          }}
        >
          Trending in Travel
        </h4>
        <div style={{ display: "flex", gap: "20px" }}>
          <p
            style={{
              color: "#000000",
              fontSize: "10px",
              fontFamily: "Fira Sans",
              fontWeight: "500",
              lineHeight: "18px",
              textUnderlinePosition: "2px",
            }}
          >
            Spring Destinations
          </p>
          <p
            style={{
              color: "#000000",
              fontSize: "10px",
              fontFamily: "Fira Sans",
              fontWeight: "500",
              lineHeight: "18px",
            }}
          >
            Sommer Destinations
          </p>
        </div>
        <div style={{ display: "flex", gap: "50px", alignContent: "center" }}>
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
        style={{ width: "100%", height: "30vh", backgroundColor: "#fecaca" }}
      >
        <h4
          style={{
            color: "#000000",
            fontSize: "17px",
            fontFamily: "Fira Sans",
            fontWeight: 700,
            lineHeight: "32px",
          }}
        >
          Trending in Travel
        </h4>
      </div>
    </div>
  );
}

export default Footer;
