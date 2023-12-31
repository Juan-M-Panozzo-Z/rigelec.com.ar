'use server';
import Firebird from "node-firebird";

export const lastArticles = async () => {
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

        const sqlQuery = `SELECT CPRDET.ART_ID, CPRDET.MOD, CPRDET.MED, CPR.FEC_IMPUT, CPR.CPR_ID, CPRDET.CPR_ID, CPR.CPR_TIPO_ID, ARTICULOS.DESCRIPCION, ARTICULOS.COD_ART, ARTICULOS.MARCA_ID, MARCAS.MARCA
        FROM CPRDET
        INNER JOIN CPR ON CPR.CPR_ID=CPRDET.CPR_ID
        INNER JOIN ARTICULOS ON CPRDET.ART_ID=ARTICULOS.ART_ID
        INNER JOIN MARCAS ON ARTICULOS.MARCA_ID=MARCAS.MARCA_ID
        WHERE CPR.CPR_TIPO_ID='RE' AND CPR.FEC_IMPUT BETWEEN '${fechaInicio}' AND '${fechaFin}'
        ORDER BY CPRDET.CPRDET_ID DESC`;
    
        // Creamos una nueva promesa
        return new Promise((resolve, reject) => {
            // Nos conectamos a la base de datos
            Firebird.attach(options, function (err, db) {
                if (err) reject(err); // Si hay un error, lo rechazamos
    
                // Hacemos la consulta
                db.query(sqlQuery, function (err, result) {
                    if (err) reject(err); // Si hay un error, lo rechazamos
    
                    // Mapeamos el resultado
                    const mappedResult = result.map((row) => ({
                        ID: row.ART_ID,
                        Descripcion: row.DESCRIPCION,
                        Marca: row.MARCA,
                        Modelo: row.MOD,
                        Medida: row.MED,
                        ImageUrl: `https://paljet.rigelec.com.ar/imagenes/articulos/${row.ART_ID}`,
                    }));
    
                    db.detach(); // Nos desconectamos de la base de datos
                    resolve(mappedResult); // Resolvemos la promesa con el resultado mapeado
                });
            });
        });
    }