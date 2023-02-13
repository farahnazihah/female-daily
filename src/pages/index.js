import Section from "@/components/Section";
import Navbar from "src/components/Navbar.js";
import EditorsChoice from "library/EditorsChoice";
import Article from "library/Article";
import { useEffect, useState } from "react";
import ReviewBox from "library/ReviewBox";
import Group from "library/Group";
import Product from "library/Product";
import { trending } from "./api/data";

const API_URL = "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp";

function Banner({ w, h, text }) {
  return (
    <div
      className="bg-gray-300 flex justify-center items-center my-3"
      style={{ width: w, height: h }}
    >
      <h3 className="text-2xl text-gray-600">{text}</h3>
    </div>
  );
}

export default function Home() {
  const [data, setData] = useState({});
  const groupData = {
    name: "Embrace the Curl",
    desc: "May our curls pop and never stop!",
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      // 4. Setting *dogImage* to the image url that we received from the response above
      .then((res) => setData(res));
    {
      data["editors choice"]?.map((content, index) =>
        console.log(content.product)
      );
    }
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-full max-w-screen-2xl">
        <Navbar />
        <div className="flex flex-col items-center mb-5">
          <Banner w={"970px"} h={"50px"} text={"Top Frame 970x50"} />
          <Banner w={"970px"} h={"250px"} text={"Top Frame 970x250"} />
        </div>
        <Section title={"Editors Choice"} subtitle="Curated with love">
          <div className="flex justify-between">
            {data["editor's choice"]?.map((choices, index) => (
              <EditorsChoice key={index} data={choices} />
            ))}
          </div>
        </Section>
        <Banner w={"970px"} h={"250px"} text={"Billboard 970x250"} />
        <Section
          title={"Latest Articles"}
          subtitle={"So you can make better purchase decision"}
          hrefMore={"/more"}
        >
          <div className="flex flex-wrap justify-between">
            {data["latest articles"]?.map((content, index) => (
              <Article key={index} articleData={content} />
            ))}
          </div>
        </Section>
        <Section
          title={"Latest Reviews"}
          subtitle={"So you can make better purchase decision"}
          hrefMore={"/more"}
        >
          <div className="flex flex-wrap justify-between">
            {data["latest review"]?.map((content, index) => (
              <ReviewBox key={index} reviewData={content} />
            ))}
          </div>
        </Section>
        <Section
          title={"Popular Groups"}
          subtitle="Where the beauty TALK are"
          hrefMore={"/more"}
        >
          <div className="flex flex-wrap justify-between">
            <Group key={1} groupData={groupData} />
            <Group key={2} groupData={groupData} />
            <Group key={3} groupData={groupData} />
            <Group key={4} groupData={groupData} />
          </div>
        </Section>
        <Section
          title={"Latest Videos"}
          subtitle={"Watch and learn, ladies"}
          hrefMore={"/more"}
        ></Section>
        <Section
          title={"Trending This Week"}
          subtitle={"See our weekly most reviewed products"}
          hrefMore={"/more"}
        >
          <div className="flex flex-wrap justify-between">
            {trending.map((content, index) => (
              <Product key={index} data={content} />
            ))}
          </div>
        </Section>
        <Section
          title={"Top Brands"}
          subtitle={"We all know and love"}
          hrefMore={"/more"}
        ></Section>
        <Section
          title={
            "Female Daily - Find everything you want to know about beauty on Female Daily"
          }
          hrefMore={"/more"}
        >
          <p>
            Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty
            Tutorials, Discussions, Beauty Workshops, anything!
          </p>
          <p>
            We are here to be your friendly solution to all things beauty,
            inside and out!
          </p>
        </Section>
      </div>
    </div>
  );
}
