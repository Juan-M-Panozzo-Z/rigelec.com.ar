"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from "@react-hook/media-query";
import Card from "@/components/Card";
import SkeletonCard from "@/components/Skeletons/Card";

export default function Slide({ articles }) {
  const isSmall = useMediaQuery("only screen and (max-width: 768px)");
  const isMedium = useMediaQuery("only screen and (max-width: 1024px)");


  const renderCards = () => {
    if (!articles) {
      const skeletonCards = new Array(6)
        .fill(0)
        .map((_, index) => <SkeletonCard key={index} />);
      return skeletonCards;
    } else {
      return articles.map((article) => {
        if (article) {
          return (
            <Card
              key={article?.ID}
              title={article?.Descripcion}
              subtitle={article?.Marca || "Sin marca"}
              description={`${article?.Modelo || "Sin modelo"}  ${article?.Medida}`}
              image={article?.ImageUrl}
            />
          );
        }
      });
    }
  };

  return (
      <Slider
        adaptiveHeight={true}
        infinite={true}
        speed={500}
        slidesToShow={isSmall ? 1 : isMedium ? 2 : isMedium ? 3 : 4}
        slidesToScroll={isSmall ? 1 : isMedium ? 2 : isMedium ? 3 : 4}
      >
        {renderCards()}
      </Slider>
  );
};