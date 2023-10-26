"use client";

import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";

builder.init("a911f43e25064e1aaa9573f45a26e400");

const SectionGrowatt = () => {
    const [builderContentJson, setBuilderContentJson] = useState(null);

    useEffect(() => {
        builder
            .get("section-en-growatt-rigelec-website", {
                url: location.pathname,
            })
            .promise()
            .then(setBuilderContentJson);
    }, []);

    return (
        <BuilderComponent
            model="section-en-growatt-rigelec-website"
            content={builderContentJson}
        />
    );
};

export default SectionGrowatt;
