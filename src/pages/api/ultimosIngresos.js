import Firebird from "node-firebird";
import axios from "axios";

export default function handler(req, res) {
    const options = {
        host: process.env.FIREBIRD_HOST || "localhost",
        port: process.env.FIREBIRD_PORT || 3050,
        database: process.env.FIREBIRD_DATABASE || "C:\\DATABASE.FDB",
        user: process.env.FIREBIRD_USER || "user",
        password: process.env.FIREBIRD_PASSWORD || "pass",
    };
    const dateNow = new Date();

    const fechaInicio = new Date(dateNow.getTime() - 86400000)
        .toISOString()
        .substring(0, 10);
    const fechaFin = new Date(dateNow.getTime() + 86400000)
        .toISOString()
        .substring(0, 10);

    const sqlQuery = `
    SELECT CPRDET.ART_ID, CPR.FEC_IMPUT, CPR.CPR_ID, CPRDET.CPR_ID, CPR.CPR_TIPO_ID, ARTICULOS.COD_ART
    FROM CPRDET
    INNER JOIN CPR ON CPR.CPR_ID=CPRDET.CPR_ID
    INNER JOIN ARTICULOS ON CPRDET.ART_ID=ARTICULOS.ART_ID
    WHERE CPR.CPR_TIPO_ID='RE' AND CPR.FEC_IMPUT BETWEEN '${fechaInicio}' AND '${fechaFin}'
    ORDER BY CPRDET.CPRDET_ID DESC`;

    Firebird.attach(options, function (err, db) {
        if (err) throw err;

        db.query(sqlQuery, function (err, result) {
            if (err) throw err;

            const mappedResult = result.map((row) => ({
                artId: row.ART_ID,
            }));

            const promises = mappedResult.map((row) =>
                axios.get(
                    `https://webservice.rigelec.com.ar/articulos?&art_id=${row.artId}`,
                    {
                        headers: {
                            authorization: "Basic QlRPQzpCVE9D",
                            EmpID: "1",
                        },
                    }
                )
            );

            Promise.all(promises)
                .then((responses) => {
                    const productos = responses.map(
                        (response) => response.data.content[0]
                    );

                    res.status(200).json(productos);
                    db.detach();
                })
                .catch((error) => {
                    console.log(error);
                    res.status(500).send("Error al obtener los productos.");
                    db.detach();
                });
        });
    });
}
