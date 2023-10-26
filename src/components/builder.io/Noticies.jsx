"use client";

import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";

builder.init("a911f43e25064e1aaa9573f45a26e400");

const Noticies = () => {
    const [builderContentJson, setBuilderContentJson] = useState(null);

    useEffect(() => {
        builder
            .get("noticies", { url: location.pathname })
            .promise()
            .then(setBuilderContentJson);
    }, []);

    return <BuilderComponent model="noticies" content={builderContentJson} />;
};

export default Noticies;
