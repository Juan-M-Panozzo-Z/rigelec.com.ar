import React, { useState, useEffect } from "react";
import Layout from "./layouts/indexLayout";
import Section from "./components/Section";
import SectionFluid from "./components/SectionFluid";
import SectionTitle from "./components/SectionTitle";
import Card from "./components/Card";
import axios from "axios";

const basicAuth = {
    username: "BTOC",
    password: "BTOC",
};

const headers = {
    "Content-Type": "application/json",
    Authorization:
        "Basic " + btoa(basicAuth.username + ":" + basicAuth.password),
    EmpID: "1",
};

export default function Home() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        const articlesIds = [1500, 5500, 7500];
        Promise.all(articlesIds.map(id =>
          axios.get(`https://webservice.rigelec.com.ar/articulos/${id}`, {
            headers: headers,
          }, basicAuth)
        ))
        .then(responses => {
          const articless = responses.map(res => res.data);
          setArticles(articless);
        })
        .catch(err => {
          console.log(err);
        })
      }, [])
    return (
        <Layout>
            <Section>
                <SectionTitle title="Articulos destacados" />
                <div className="mt-8 grid md:grid-cols-3 text-center gap-8">
                    {articles.map((article) => (
                        <Card
                        key={article.title}
                        title={article.descripcion}
                        urlArchivo={article.urlArchivo}
                        image={article.imageUrl}
                    />
                    ))}
                </div>
            </Section>
            <SectionFluid></SectionFluid>
        </Layout>
    );
}
