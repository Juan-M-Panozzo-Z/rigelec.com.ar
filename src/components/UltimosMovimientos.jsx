"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@react-hook/media-query";
import Card from "@/components/Card";
import axios from "axios";
import SkeletonCard from "@/components/Skeletons/Card";
import Section from "./Section";
import SectionTitle from "./SectionTitle";

const UltimosMovimientos = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const isSmall = useMediaQuery("only screen and (max-width: 768px)");
  const isMedium = useMediaQuery("only screen and (max-width: 1024px)");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/api/ultimosIngresos")
      .then(({ data }) => {
        setArticles(data);
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
      const skeletonCards = new Array(6)
        .fill(0)
        .map((_, index) => <SkeletonCard key={index} />);
      return skeletonCards;
    } else {
      return articles.map((article) => {
        if (article) {
          return (
            <Card
              key={article?.id}
              title={article?.descripcion}
              subtitle={article?.marca.nombre}
              description={`${article?.modelo} ${article?.medida}`}
              image={`https://paljet.rigelec.com.ar/imagenes/articulos/${article?.id}`}
            />
          );
        }
      });
    }
  };

  return (
    <Section>
      <SectionTitle title="Últimos ingresos" />
      <Slider
        adaptiveHeight={true}
        infinite={true}
        speed={500}
        slidesToShow={isSmall ? 1 : isMedium ? 2 : isMedium ? 3 : 4}
        slidesToScroll={isSmall ? 1 : isMedium ? 2 : isMedium ? 3 : 4}
      >
        {renderCards()}
      </Slider>
    </Section>
  );
};

export default UltimosMovimientos;