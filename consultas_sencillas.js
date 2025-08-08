// 1. Buscar todos los equipos de Atletismo
db.delegaciones.find(
  { "equipos.disciplina": "Atletismo" },
  { nombre: 1, "equipos.nombre": 1, _id: 0 }
)

// 2. Consultar atletas de la delegación Medellín
db.delegaciones.find(
  { nombre: "Medellín" },
  { "equipos.atletas.nombre": 1, _id: 0 }
)

// 3. Mostrar competencias de Natación
db.competencias.find(
  { disciplina: "Natación" },
  { nombre: 1, fecha_inicio: 1, lugar: 1, _id: 0 }
)

// 4. Listar delegaciones que tengan equipos de Fútbol
db.delegaciones.find(
  { "equipos.disciplina": "Fútbol" },
  { nombre: 1, "equipos.nombre": 1, _id: 0 }
)

// 5. Consultar todas las disciplinas registradas en competencias (sin repetir)
db.competencias.distinct("disciplina")
