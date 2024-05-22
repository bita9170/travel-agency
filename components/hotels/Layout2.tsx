import React from "react";
import MaxLimitWrapper from "@/components/elements/MaxLimitWrapper";
import Tab from "@/components/tabsection/Tab";
import Link from "next/link";

const dataDrop = [
  {
    title: "Recommended",
    // content: <SpringContent />,
  },
  {
    title: "Walking & Biking",
    // content: <SommerContent />,
  },
  {
    title: "Cultural & Theme Tours",
    // content: <SommerContent />,
  },
  {
    title: "Sightseeing Tickets&",
    // content: <SommerContent />,
  },
];

function Layout2() {
  return (
    <>
      {/* experience Eiffel Tower */}
      <MaxLimitWrapper className="grid md:grid-cols-2 p-2 ">
        <Tab data={dataDrop} tabsHeading="Top way to experience Eiffel Tower" />
        <div style={{ marginLeft: "auto" }}>
          {" "}
          <Link href={""}>See all</Link>
        </div>
      </MaxLimitWrapper>
      {/* ENDE experience Eiffel Tower */}
    </>
  );
}

export default Layout2;
