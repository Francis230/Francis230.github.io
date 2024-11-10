const express = require('express');
const app = express();
const port = 3000;

// Datos de ejemplo
const grupoInfo = {
  nombre: "Grupo de Desarrollo",
  descripcion: "Equipo encargado del desarrollo de aplicaciones web"
};

const integrantes = [
  { id: 1, nombre: "Walter", rol: "Scrum Master" },
  { id: 2, nombre: "Alisson", rol: "UX Designer" },
  { id: 3, nombre: "Adrian", rol: "UX Designer" },
  { id: 4, nombre: "Evelyn", rol: "UX Designer" },
  { id: 5, nombre: "Francis", rol: "UX Designer" },
  { id: 6, nombre: "Ariel", rol: "UX Designer" },
  { id: 7, nombre: "Jonathan", rol: "UX Designer" }
];

const productos = [
  { id: 1, nombre: "Producto A", descripcion: "Descripción del producto A" },
  { id: 2, nombre: "Producto B", descripcion: "Descripción del producto B" },
  { id: 3, nombre: "Producto C", descripcion: "Descripción del producto C" }
];

// Ruta GET para la información del grupo
app.get('/', (req, res) => {
  res.json(grupoInfo);
});

// Ruta GET para la lista de integrantes
app.get('/integrantes', (req, res) => {
  res.json(integrantes);
});

// Ruta GET para un integrante específico
app.get('/integrantes/:id', (req, res) => {
  const integranteId = parseInt(req.params.id);
  const integrante = integrantes.find(i => i.id === integranteId);

  if (integrante) {
    res.json(integrante);
  } else {
    res.status(404).send('Integrante no encontrado');
  }
});

// Ruta GET para mostrar los productos en HTML
app.get('/products', (req, res) => {
  let html = '<h1>Lista de Productos</h1><ul>';
  productos.forEach(producto => {
    html += `<li><strong>${producto.nombre}</strong>: ${producto.descripcion}</li>`;
  });
  html += '</ul>';
  res.send(html);
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
