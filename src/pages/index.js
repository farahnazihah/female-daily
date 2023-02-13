import { useEffect, useState } from "react";
import Image from "next/image";

import EditorsChoice from "@bit/farahnazihah.female-daily-component.editors-choice";
import Article from "@bit/farahnazihah.female-daily-component.article";
import ReviewBox from "@bit/farahnazihah.female-daily-component.review-box";
import Group from "@bit/farahnazihah.female-daily-component.group";
import Product from "@bit/farahnazihah.female-daily-component.product";
import Button from "@bit/farahnazihah.female-daily-component.button";

import Section from "@/components/Section";
import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer";
import { trending, logoBrand } from "./api/data";

const API_URL = "https://virtserver.swaggerhub.com/hqms/FDN-WP/0.1/wp";

function Banner({ w, h, text }) {
  return (
    <div
      className="bg-gray-300 flex justify-center items-center my-3 w-full"
      style={{ "max-width": w, height: h }}
    >
      <h3 className="text-2xl text-gray-600">{text}</h3>
    </div>
  );
}

function Logo({ src }) {
  return (
    <Image
      loader={() => src}
      src={src}
      alt="product"
      width="0"
      height="0"
      className="w-32 h-auto rounded-lg mb-3"
    />
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
      console.log(data);
    }
  }, []);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center w-full max-w-screen-2xl">
        <Navbar />
        <Banner w={"970px"} h={"50px"} text={"Top Frame 970x50"} />
        <Banner w={"970px"} h={"250px"} text={"Top Frame 970x250"} />
        <Section title={"Editors Choice"} subtitle="Curated with love">
          <div className="flex gap-10">
            {data["editor's choice"]?.map((choices, index) => (
              <EditorsChoice key={index} data={choices} />
            ))}
          </div>
        </Section>
        <div className="flex bg-rose-200 w-full justify-center">
          <div className="flex flex-row gap-10 my-10 w-4/5">
            <div className="">
              <h2 className="font-bold text-xl">
                Looking for products that are just simply perfect for you?
              </h2>
              <p className="font-medium my-5">
                Here are some products that we believe match your skin, hair,
                and body! Have we mentioned that they solve your concerns too?
              </p>
              <Button type={"solid"}>See My Matches</Button>
            </div>
            <div className="flex flex-row gap-10">
              <Product data={trending[0]} />
              <Product data={trending[1]} />
              <Product data={trending[2]} />
            </div>
          </div>
        </div>
        <Banner w={"970px"} h={"250px"} text={"Billboard 970x250"} />
        <Section
          title={"Latest Articles"}
          subtitle={"So you can make better purchase decision"}
          hrefMore={"/more"}
        >
          <div className="grid grid-cols-3 gap-10">
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
          <div className="grid grid-cols-3 gap-10">
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
          <div className="grid grid-cols-4 gap-10">
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
        >
          <div className="flex flex-row gap-5">
            <div className="bg-pink-100 w-8/12 h-96">Video 1</div>
            <div className=" h-96 flex flex-col w-4/12 gap-5 h-96">
              <div className="bg-pink-100 w-full h-full">Video 2</div>
              <div className="bg-pink-100 w-full h-full">Video 3</div>
            </div>
          </div>
        </Section>
        <Section
          title={"Trending This Week"}
          subtitle={"See our weekly most reviewed products"}
          hrefMore={"/more"}
        >
          <div className="grid grid-cols-5 gap-10">
            {trending.map((content, index) => (
              <Product key={index} data={content} />
            ))}
          </div>
        </Section>
        <Section
          title={"Top Brands"}
          subtitle={"We all know and love"}
          hrefMore={"/more"}
        >
          <div className="grid grid-cols-6">
            {logoBrand.map((src, index) => (
              <div key={index} className="flex flex-row items-center">
                <Logo src={src} />
              </div>
            ))}
          </div>
        </Section>
        <Section
          title={
            "Female Daily - Find everything you want to know about beauty on Female Daily"
          }
        >
          <p className="font-medium">
            Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty
            Tutorials, Discussions, Beauty Workshops, anything! We are here to
            be your friendly solution to all things beauty, inside and out!
          </p>
        </Section>
        <Section>
          <Footer />
        </Section>
      </div>
    </div>
  );
}
