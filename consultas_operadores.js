

// 2. Atletas con edad mayor a 25 años
db.delegaciones.find(
  { "equipos.atletas.edad": { $gt: 25 } },
  { "equipos.atletas.$": 1, _id: 0 }
)

// 3. Competencias programadas después del 1 de septiembre de 2025
db.competencias.find(
  { fecha_inicio: { $gt: "2025-09-01" } },
  { nombre: 1, fecha_inicio: 1, _id: 0 }
)

// 4. Delegaciones que tengan equipos de Fútbol o Ciclismo
db.delegaciones.find(
  { "equipos.disciplina": { $in: ["Fútbol", "Ciclismo"] } },
  { nombre: 1, "equipos.disciplina": 1, _id: 0 }
)

// 5. Competencias cuya categoría no sea Libre
db.competencias.find(
  { categoria: { $ne: "Libre" } },
  { nombre: 1, categoria: 1, _id: 0 }
)

// 6. Delegaciones con atletas menores de 20 años
db.delegaciones.find(
  { "equipos.atletas.edad": { $lt: 20 } },
  { nombre: 1, "equipos.atletas.nombre": 1, _id: 0 }
)

// 7. Competencias de Atletismo o Natación
db.competencias.find(
  { disciplina: { $in: ["Atletismo", "Natación"] } },
  { nombre: 1, disciplina: 1, _id: 0 }
)

// 8. Delegaciones con equipos cuya categoría sea "Sub-20" o "Junior"
db.delegaciones.find(
  { "equipos.categoria": { $in: ["Sub-20", "Junior"] } },
  { nombre: 1, "equipos.categoria": 1, _id: 0 }
)

// 9. Atletas que compitan en pruebas que incluyan la palabra "Relevo"
db.delegaciones.find(
  { "equipos.atletas.pruebas": { $elemMatch: { $regex: "Relevo", $options: "i" } } },
  { nombre: 1, "equipos.atletas.pruebas": 1, _id: 0 }
)

// 10. Competencias que duren más de un día
db.competencias.find(
  { $expr: { $ne: ["$fecha_inicio", "$fecha_fin"] } },
  { nombre: 1, fecha_inicio: 1, fecha_fin: 1, _id: 0 }
)
