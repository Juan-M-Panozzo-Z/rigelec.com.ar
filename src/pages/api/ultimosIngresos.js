const Firebird = require("node-firebird");

export default function handler(req, res) {
    const options = {
        host: "201.252.141.39",
        port: 3050,
        database: "D:\\ETSOL\\PaljetERP\\database\\DBSIF.FDB",
        user: "SYSDBA",
        password: "masterkey",
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

    Firebird.attach(options, function (err, db) {
        if (err) throw err;

        db.query(sqlQuery, function (err, result) {
            if (err) throw err;
        
            const mappedResult = result.map((row) => ({
                ID: row.ART_ID,
                Descripcion: row.DESCRIPCION,
                Marca: row.MARCA,
                Modelo: row.MOD,
                Medida: row.MED,
                ImageUrl: `https://paljet.rigelec.com.ar/imagenes/articulos/${row.ART_ID}`,
            }));
        
            res.status(200).json(mappedResult);
            db.detach();
        });
    });
}
