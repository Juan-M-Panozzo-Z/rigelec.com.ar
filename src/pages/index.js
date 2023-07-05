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
    const [activeTab, setActiveTab] = useState(0);
    const [articles, setArticles] = useState([]);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    useEffect(() => {
        const articlesIds = [7600, 7900, 19600];
        Promise.all(
            articlesIds.map((id) =>
                axios.get(
                    `https://webservice.rigelec.com.ar/articulos/${id}`,
                    {
                        headers: headers,
                    },
                    basicAuth
                )
            )
        )
            .then((responses) => {
                const articles = responses.map((res) => res.data);
                setArticles(articles);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <Layout title="Home">
            <Section>
                <SectionTitle title="Articulos destacados" />
                <div className="tabs tabs-boxed bg-base-100 flex justify-center">
                    <a
                        className={`tab xs:tab-xs sm:tab-sm md:tab-md transition-all duration-200 ${activeTab === 0 ? "tab-active" : ""}`}
                        onClick={() => handleTabClick(0)}
                    >
                        Energías Renovables
                    </a>
                    <a
                        className={`tab xs:tab-xs sm:tab-sm md:tab-md transition-all duration-200 ${activeTab === 1 ? "tab-active" : ""}`}
                        onClick={() => handleTabClick(1)}
                    >
                        Iluminación
                    </a>
                    <a
                        className={`tab xs:tab-xs sm:tab-sm md:tab-md transition-all duration-200 ${activeTab === 2 ? "tab-active" : ""}`}
                        onClick={() => handleTabClick(2)}
                    >
                        Industria
                    </a>
                </div>
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
            <SectionFluid>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.958804991934!2d-58.0255689251823!3d-31.387699394863642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ade810c013decd%3A0xed4b0d1cc11c9336!2sRIGELEC%20ELECTRICIDAD%20e%20ILUMINACI%C3%93N%20%2B%20ENERGIAS%20RENOVABLES!5e0!3m2!1sen!2sar!4v1688583605125!5m2!1sen!2sar"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="w-full h-96 rounded-box"
                ></iframe>
            </SectionFluid>
        </Layout>
    );
}
