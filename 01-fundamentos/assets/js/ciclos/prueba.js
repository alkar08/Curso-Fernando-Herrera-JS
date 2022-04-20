let dataList = [];

let registros = {
  entrega_1: [
    {
      carpeta: "20210502_210752",
      estructura: "ESTRUCTURADO",
      nombre_carpeta: "el nombre de la carpeta del excel",
      formulario: "19462975",
    },
    {
      carpeta: "20210502_210752",
      estructura: "ESTRUCTURADO",
      nombre_carpeta: "otra carpeta",
      formulario: "19443799",
    },
  ],
  entrega_2: [
    {
      carpeta: "121212",
      estructura: "ESTRUCTURADO",
      nombre_carpeta: "el nombre de la carpeta del excel",
      formulario: "55555",
    },
    {
      carpeta: "121212",
      estructura: "ESTRUCTURADO",
      nombre_carpeta: "otra carpeta 777",
      formulario: "66666",
    },
  ],
};

for (const entrega in registros) {
  if (Object.hasOwnProperty.call(registros, entrega)) {
    for (const row of registros[entrega]) {
      try {
        let dataRow = {
          delivery: entrega.split("_", 2)[1].toString(),
          delivery_date: new Date(),
          folder: row.carpeta,
          folder_name: row.nombre_carpeta,
          upload_structure: row.estructura == "ESTRUCTURADO" ? "EST" : "NOT",
          form_upload_id: row.formulario,
        };
        dataList.push(dataRow);
      } catch (error) {
        console.log(error);
      }
    }
  }
}

console.log(dataList);
