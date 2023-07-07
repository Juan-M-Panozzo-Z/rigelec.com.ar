import React, { useState, useEffect } from "react";
import Layout from "./layouts/indexLayout";
import Section from "./components/Section";
import SectionFluid from "./components/SectionFluid";
import SectionTitle from "./components/SectionTitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@react-hook/media-query";
import Card from "./components/Card";
import axios from "axios";
import SkeletonCard from "./components/Skeletons/Card";
import ContactUs from "./components/ContactUs";

export default function Home() {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const isMedium = useMediaQuery("only screen and (max-width: 768px)");

    useEffect(() => {
        setIsLoading(true);
        axios
            .get("/api/ultimosIngresos")
            .then((response) => {
                setArticles(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    const renderCards = () => {
        if (isLoading) {
          const skeletonCards = new Array(6).fill(0).map((_, index) => (
            <SkeletonCard key={index} />
          ));
          return (
            
              skeletonCards
            
          );
        } else {
          return articles.map((article) => (
            <Card
              key={article.Id}
              title={article.Descripcion}
              subtitle={article.Marca}
              description={`${article.Modelo} ${article.Medida}`}
              image={article.ImageUrl}
            />
          ));
        }
      };

    return (
        <Layout title="Home">
            <Section className={"px-8 md:px-12"}>
                <SectionTitle title="Ultimos ingresos" />
                <Slider
                    dots={true}
                    infinite={true}
                    speed={500}
                    slidesToShow={isMedium ? 1 : 3}
                    slidesToScroll={isMedium ? 1 : 3}
                    className="w-full"
                >
                    {renderCards()}
                </Slider>
            </Section>
            {/* <Section className={"px-8 md:px-12"}>
            <SectionTitle title="Contactanos" />
                <ContactUs />
            </Section> */}
            <SectionFluid>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.958804991934!2d-58.0255689251823!3d-31.387699394863642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ade810c013decd%3A0xed4b0d1cc11c9336!2sRIGELEC%20ELECTRICIDAD%20e%20ILUMINACI%C3%93N%20%2B%20ENERGIAS%20RENOVABLES!5e0!3m2!1sen!2sar!4v1688583605125!5m2!1sen!2sar"
                    loading="lazy"
                    className="w-full h-96 rounded-box"
                ></iframe>
            </SectionFluid>
        </Layout>
    );
}
