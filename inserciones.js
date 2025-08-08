// Insert delegaciones
db.delegaciones.insertMany([
  {
    "nombre": "Medellín",
    "entrenador_jefe": "Carlos Torres",
    "equipos": [
      {
        "nombre": "Atletismo Medellín Libre",
        "categoria": "Libre",
        "disciplina": "Atletismo",
        "atletas": [
          {
            "nombre": "Juan Pérez",
            "edad": 22,
            "genero": "Masculino",
            "numero_identificacion": 123456789,
            "pruebas": [
              "100m planos",
              "Salto largo"
            ]
          },
          {
            "nombre": "Laura Gómez",
            "edad": 20,
            "genero": "Femenino",
            "numero_identificacion": 987654321,
            "pruebas": [
              "200m planos",
              "Relevo 4x100"
            ]
          },
          {
            "nombre": "Camila Rodríguez",
            "edad": 23,
            "genero": "Femenino",
            "numero_identificacion": 100100100,
            "pruebas": [
              "400m planos",
              "800m planos"
            ]
          },
          {
            "nombre": "Daniel Morales",
            "edad": 25,
            "genero": "Masculino",
            "numero_identificacion": 100100101,
            "pruebas": [
              "Salto triple",
              "Salto alto"
            ]
          },
          {
            "nombre": "Natalia Castro",
            "edad": 19,
            "genero": "Femenino",
            "numero_identificacion": 100100102,
            "pruebas": [
              "100m vallas",
              "Relevo 4x100"
            ]
          },
          {
            "nombre": "Esteban Ríos",
            "edad": 21,
            "genero": "Masculino",
            "numero_identificacion": 100100103,
            "pruebas": [
              "Lanzamiento de jabalina",
              "Lanzamiento de disco"
            ]
          },
          {
            "nombre": "Sara Herrera",
            "edad": 20,
            "genero": "Femenino",
            "numero_identificacion": 100100104,
            "pruebas": [
              "1500m planos",
              "3000m obstáculos"
            ]
          },
          {
            "nombre": "Luis Martínez",
            "edad": 24,
            "genero": "Masculino",
            "numero_identificacion": 100100105,
            "pruebas": [
              "Relevo 4x100",
              "200m planos"
            ]
          },
          {
            "nombre": "Valentina López",
            "edad": 22,
            "genero": "Femenino",
            "numero_identificacion": 100100106,
            "pruebas": [
              "Salto largo",
              "100m planos"
            ]
          },
          {
            "nombre": "Andrés Ramírez",
            "edad": 23,
            "genero": "Masculino",
            "numero_identificacion": 100100107,
            "pruebas": [
              "400m con vallas",
              "800m planos"
            ]
          },
          {
            "nombre": "Paula Mejía",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 100100108,
            "pruebas": [
              "Relevo 4x400",
              "1500m planos"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Bogotá",
    "entrenador_jefe": "Andrés Salgado",
    "equipos": [
      {
        "nombre": "Fútbol Bogotá Sub-20",
        "categoria": "Sub-20",
        "disciplina": "Fútbol",
        "atletas": [
          {
            "nombre": "Carlos Méndez",
            "edad": 19,
            "genero": "Masculino",
            "numero_identificacion": 200200201,
            "pruebas": [
              "Delantero"
            ]
          },
          {
            "nombre": "José Gutiérrez",
            "edad": 20,
            "genero": "Masculino",
            "numero_identificacion": 200200202,
            "pruebas": [
              "Arquero"
            ]
          },
          {
            "nombre": "Samuel Ortiz",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 200200203,
            "pruebas": [
              "Defensa central"
            ]
          },
          {
            "nombre": "Mateo Ramírez",
            "edad": 20,
            "genero": "Masculino",
            "numero_identificacion": 200200204,
            "pruebas": [
              "Lateral derecho"
            ]
          },
          {
            "nombre": "Felipe Torres",
            "edad": 19,
            "genero": "Masculino",
            "numero_identificacion": 200200205,
            "pruebas": [
              "Mediocampista"
            ]
          },
          {
            "nombre": "Luis Suárez",
            "edad": 20,
            "genero": "Masculino",
            "numero_identificacion": 200200206,
            "pruebas": [
              "Delantero"
            ]
          },
          {
            "nombre": "Camilo Álvarez",
            "edad": 19,
            "genero": "Masculino",
            "numero_identificacion": 200200207,
            "pruebas": [
              "Defensa lateral"
            ]
          },
          {
            "nombre": "Andrés Ríos",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 200200208,
            "pruebas": [
              "Mediocampista"
            ]
          },
          {
            "nombre": "Julián Vargas",
            "edad": 19,
            "genero": "Masculino",
            "numero_identificacion": 200200209,
            "pruebas": [
              "Arquero suplente"
            ]
          },
          {
            "nombre": "Kevin Romero",
            "edad": 20,
            "genero": "Masculino",
            "numero_identificacion": 200200210,
            "pruebas": [
              "Defensa"
            ]
          },
          {
            "nombre": "Sebastián Mora",
            "edad": 19,
            "genero": "Masculino",
            "numero_identificacion": 200200211,
            "pruebas": [
              "Delantero"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Cali",
    "entrenador_jefe": "Mariana Salazar",
    "equipos": [
      {
        "nombre": "Ciclismo Cali Elite",
        "categoria": "Elite",
        "disciplina": "Ciclismo",
        "atletas": [
          {
            "nombre": "Juan Herrera",
            "edad": 27,
            "genero": "Masculino",
            "numero_identificacion": 300300301,
            "pruebas": [
              "Ruta"
            ]
          },
          {
            "nombre": "Pedro Jiménez",
            "edad": 25,
            "genero": "Masculino",
            "numero_identificacion": 300300302,
            "pruebas": [
              "Pista"
            ]
          },
          {
            "nombre": "María Ruiz",
            "edad": 26,
            "genero": "Femenino",
            "numero_identificacion": 300300303,
            "pruebas": [
              "Contrarreloj"
            ]
          },
          {
            "nombre": "Diana López",
            "edad": 24,
            "genero": "Femenino",
            "numero_identificacion": 300300304,
            "pruebas": [
              "Ruta"
            ]
          },
          {
            "nombre": "Oscar Vega",
            "edad": 28,
            "genero": "Masculino",
            "numero_identificacion": 300300305,
            "pruebas": [
              "Pista"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Barranquilla",
    "entrenador_jefe": "Jorge Castaño",
    "equipos": [
      {
        "nombre": "Natación Barranquilla Junior",
        "categoria": "Junior",
        "disciplina": "Natación",
        "atletas": [
          {
            "nombre": "Lucía Benítez",
            "edad": 17,
            "genero": "Femenino",
            "numero_identificacion": 400400401,
            "pruebas": [
              "100m libre",
              "200m libre"
            ]
          },
          {
            "nombre": "Andrés Nieto",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 400400402,
            "pruebas": [
              "100m mariposa",
              "200m combinado"
            ]
          },
          {
            "nombre": "Valentina Torres",
            "edad": 16,
            "genero": "Femenino",
            "numero_identificacion": 400400403,
            "pruebas": [
              "100m espalda"
            ]
          },
          {
            "nombre": "Santiago Duque",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 400400404,
            "pruebas": [
              "50m libre",
              "100m libre"
            ]
          },
          {
            "nombre": "Daniela Díaz",
            "edad": 18,
            "genero": "Femenino",
            "numero_identificacion": 400400405,
            "pruebas": [
              "200m mariposa"
            ]
          },
          {
            "nombre": "Tomás Rojas",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 400400406,
            "pruebas": [
              "400m libre"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Manizales",
    "entrenador_jefe": "Silvia Giraldo",
    "equipos": [
      {
        "nombre": "Atletismo Manizales Libre",
        "categoria": "Libre",
        "disciplina": "Atletismo",
        "atletas": [
          {
            "nombre": "David Ocampo",
            "edad": 24,
            "genero": "Masculino",
            "numero_identificacion": 500500501,
            "pruebas": [
              "100m planos",
              "Salto largo"
            ]
          },
          {
            "nombre": "Daniela Mora",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 500500502,
            "pruebas": [
              "200m planos",
              "Relevo 4x100"
            ]
          },
          {
            "nombre": "Julián Vargas",
            "edad": 22,
            "genero": "Masculino",
            "numero_identificacion": 500500503,
            "pruebas": [
              "400m planos",
              "800m planos"
            ]
          },
          {
            "nombre": "Laura Bonilla",
            "edad": 23,
            "genero": "Femenino",
            "numero_identificacion": 500500504,
            "pruebas": [
              "Salto triple",
              "Salto alto"
            ]
          },
          {
            "nombre": "Manuela Cruz",
            "edad": 20,
            "genero": "Femenino",
            "numero_identificacion": 500500505,
            "pruebas": [
              "100m vallas",
              "Relevo 4x100"
            ]
          },
          {
            "nombre": "Carlos Gómez",
            "edad": 23,
            "genero": "Masculino",
            "numero_identificacion": 500500506,
            "pruebas": [
              "Lanzamiento de bala",
              "Lanzamiento de disco"
            ]
          },
          {
            "nombre": "Mariana Rodríguez",
            "edad": 22,
            "genero": "Femenino",
            "numero_identificacion": 500500507,
            "pruebas": [
              "1500m planos",
              "3000m obstáculos"
            ]
          },
          {
            "nombre": "Héctor Ruiz",
            "edad": 25,
            "genero": "Masculino",
            "numero_identificacion": 500500508,
            "pruebas": [
              "Relevo 4x100",
              "200m planos"
            ]
          },
          {
            "nombre": "Daniela Pérez",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 500500509,
            "pruebas": [
              "Salto largo",
              "100m planos"
            ]
          },
          {
            "nombre": "Camilo Patiño",
            "edad": 24,
            "genero": "Masculino",
            "numero_identificacion": 500500510,
            "pruebas": [
              "400m con vallas",
              "800m planos"
            ]
          },
          {
            "nombre": "Ana Martínez",
            "edad": 22,
            "genero": "Femenino",
            "numero_identificacion": 500500511,
            "pruebas": [
              "Relevo 4x400",
              "1500m planos"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Cartagena",
    "entrenador_jefe": "Samuel Rodríguez",
    "equipos": [
      {
        "nombre": "Cartagena FC Sub-23",
        "categoria": "Sub-23",
        "disciplina": "Fútbol",
        "atletas": [
          {
            "nombre": "Andrés Suárez",
            "edad": 22,
            "genero": "Masculino",
            "numero_identificacion": 201000001,
            "pruebas": [
              "Delantero"
            ]
          },
          {
            "nombre": "José Castillo",
            "edad": 21,
            "genero": "Masculino",
            "numero_identificacion": 201000002,
            "pruebas": [
              "Portero"
            ]
          },
          {
            "nombre": "Carlos Medina",
            "edad": 20,
            "genero": "Masculino",
            "numero_identificacion": 201000003,
            "pruebas": [
              "Defensa central"
            ]
          },
          {
            "nombre": "Luis Becerra",
            "edad": 23,
            "genero": "Masculino",
            "numero_identificacion": 201000004,
            "pruebas": [
              "Lateral derecho"
            ]
          },
          {
            "nombre": "Jorge Ramírez",
            "edad": 22,
            "genero": "Masculino",
            "numero_identificacion": 201000005,
            "pruebas": [
              "Mediocampista"
            ]
          },
          {
            "nombre": "Mario Ríos",
            "edad": 21,
            "genero": "Masculino",
            "numero_identificacion": 201000006,
            "pruebas": [
              "Delantero"
            ]
          },
          {
            "nombre": "Fernando Londoño",
            "edad": 20,
            "genero": "Masculino",
            "numero_identificacion": 201000007,
            "pruebas": [
              "Defensa izquierdo"
            ]
          },
          {
            "nombre": "Wilson Torres",
            "edad": 22,
            "genero": "Masculino",
            "numero_identificacion": 201000008,
            "pruebas": [
              "Mediocampista"
            ]
          },
          {
            "nombre": "Oscar García",
            "edad": 23,
            "genero": "Masculino",
            "numero_identificacion": 201000009,
            "pruebas": [
              "Delantero"
            ]
          },
          {
            "nombre": "Esteban Díaz",
            "edad": 21,
            "genero": "Masculino",
            "numero_identificacion": 201000010,
            "pruebas": [
              "Lateral izquierdo"
            ]
          },
          {
            "nombre": "Miguel Sánchez",
            "edad": 22,
            "genero": "Masculino",
            "numero_identificacion": 201000011,
            "pruebas": [
              "Mediocampista defensivo"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Ibagué",
    "entrenador_jefe": "Juliana Pérez",
    "equipos": [
      {
        "nombre": "Tigresas Ibagué",
        "categoria": "Femenino",
        "disciplina": "Fútbol",
        "atletas": [
          {
            "nombre": "Laura Álvarez",
            "edad": 22,
            "genero": "Femenino",
            "numero_identificacion": 201000101,
            "pruebas": [
              "Delantera"
            ]
          },
          {
            "nombre": "Natalia Mendoza",
            "edad": 23,
            "genero": "Femenino",
            "numero_identificacion": 201000102,
            "pruebas": [
              "Portera"
            ]
          },
          {
            "nombre": "María Castaño",
            "edad": 20,
            "genero": "Femenino",
            "numero_identificacion": 201000103,
            "pruebas": [
              "Defensa central"
            ]
          },
          {
            "nombre": "Ana Ríos",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 201000104,
            "pruebas": [
              "Lateral derecho"
            ]
          },
          {
            "nombre": "Sofía Herrera",
            "edad": 19,
            "genero": "Femenino",
            "numero_identificacion": 201000105,
            "pruebas": [
              "Mediocampista"
            ]
          },
          {
            "nombre": "Valeria Torres",
            "edad": 22,
            "genero": "Femenino",
            "numero_identificacion": 201000106,
            "pruebas": [
              "Delantera"
            ]
          },
          {
            "nombre": "Daniela Gómez",
            "edad": 23,
            "genero": "Femenino",
            "numero_identificacion": 201000107,
            "pruebas": [
              "Defensa izquierda"
            ]
          },
          {
            "nombre": "Manuela Ruiz",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 201000108,
            "pruebas": [
              "Mediocampista"
            ]
          },
          {
            "nombre": "Camila Quintero",
            "edad": 22,
            "genero": "Femenino",
            "numero_identificacion": 201000109,
            "pruebas": [
              "Delantera"
            ]
          },
          {
            "nombre": "Juliana Pardo",
            "edad": 20,
            "genero": "Femenino",
            "numero_identificacion": 201000110,
            "pruebas": [
              "Lateral izquierdo"
            ]
          },
          {
            "nombre": "Mariana Díaz",
            "edad": 22,
            "genero": "Femenino",
            "numero_identificacion": 201000111,
            "pruebas": [
              "Mediocampista defensiva"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Villavicencio",
    "entrenador_jefe": "Pedro Gutiérrez",
    "equipos": [
      {
        "nombre": "Llaneros Juvenil",
        "categoria": "Juvenil",
        "disciplina": "Fútbol",
        "atletas": [
          {
            "nombre": "Sebastián Mora",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 201000201,
            "pruebas": [
              "Delantero"
            ]
          },
          {
            "nombre": "Héctor Pérez",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 201000202,
            "pruebas": [
              "Portero"
            ]
          },
          {
            "nombre": "Diego Castro",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 201000203,
            "pruebas": [
              "Defensa"
            ]
          },
          {
            "nombre": "Andrés Herrera",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 201000204,
            "pruebas": [
              "Lateral"
            ]
          },
          {
            "nombre": "Cristian Díaz",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 201000205,
            "pruebas": [
              "Mediocampista"
            ]
          },
          {
            "nombre": "Juan Martínez",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 201000206,
            "pruebas": [
              "Delantero"
            ]
          },
          {
            "nombre": "Felipe Romero",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 201000207,
            "pruebas": [
              "Defensa"
            ]
          },
          {
            "nombre": "Carlos Ávila",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 201000208,
            "pruebas": [
              "Mediocampista"
            ]
          },
          {
            "nombre": "Julián Ortiz",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 201000209,
            "pruebas": [
              "Delantero"
            ]
          },
          {
            "nombre": "Tomás Rodríguez",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 201000210,
            "pruebas": [
              "Lateral"
            ]
          },
          {
            "nombre": "David Salazar",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 201000211,
            "pruebas": [
              "Mediocampista defensivo"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Bucaramanga",
    "entrenador_jefe": "Rafael Navarro",
    "equipos": [
      {
        "nombre": "Auriverdes Bucaramanga",
        "categoria": "Libre",
        "disciplina": "Fútbol",
        "atletas": [
          {
            "nombre": "Oscar Medina",
            "edad": 24,
            "genero": "Masculino",
            "numero_identificacion": 201000301,
            "pruebas": [
              "Delantero"
            ]
          },
          {
            "nombre": "Javier Torres",
            "edad": 25,
            "genero": "Masculino",
            "numero_identificacion": 201000302,
            "pruebas": [
              "Portero"
            ]
          },
          {
            "nombre": "Camilo Duarte",
            "edad": 23,
            "genero": "Masculino",
            "numero_identificacion": 201000303,
            "pruebas": [
              "Defensa central"
            ]
          },
          {
            "nombre": "Ricardo Páez",
            "edad": 24,
            "genero": "Masculino",
            "numero_identificacion": 201000304,
            "pruebas": [
              "Lateral derecho"
            ]
          },
          {
            "nombre": "Hugo Castañeda",
            "edad": 25,
            "genero": "Masculino",
            "numero_identificacion": 201000305,
            "pruebas": [
              "Mediocampista"
            ]
          },
          {
            "nombre": "Kevin Giraldo",
            "edad": 23,
            "genero": "Masculino",
            "numero_identificacion": 201000306,
            "pruebas": [
              "Delantero"
            ]
          },
          {
            "nombre": "Raúl Silva",
            "edad": 24,
            "genero": "Masculino",
            "numero_identificacion": 201000307,
            "pruebas": [
              "Defensa izquierdo"
            ]
          },
          {
            "nombre": "Jesús Zapata",
            "edad": 25,
            "genero": "Masculino",
            "numero_identificacion": 201000308,
            "pruebas": [
              "Mediocampista"
            ]
          },
          {
            "nombre": "Jonathan Vélez",
            "edad": 24,
            "genero": "Masculino",
            "numero_identificacion": 201000309,
            "pruebas": [
              "Delantero"
            ]
          },
          {
            "nombre": "David Cárdenas",
            "edad": 23,
            "genero": "Masculino",
            "numero_identificacion": 201000310,
            "pruebas": [
              "Lateral izquierdo"
            ]
          },
          {
            "nombre": "Iván Rincón",
            "edad": 25,
            "genero": "Masculino",
            "numero_identificacion": 201000311,
            "pruebas": [
              "Mediocampista defensivo"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Montería",
    "entrenador_jefe": "Andrea Salcedo",
    "equipos": [
      {
        "nombre": "Montería Femenino Libre",
        "categoria": "Libre",
        "disciplina": "Fútbol",
        "atletas": [
          {
            "nombre": "Tatiana Romero",
            "edad": 24,
            "genero": "Femenino",
            "numero_identificacion": 201000401,
            "pruebas": [
              "Delantera"
            ]
          },
          {
            "nombre": "Luisa Peña",
            "edad": 25,
            "genero": "Femenino",
            "numero_identificacion": 201000402,
            "pruebas": [
              "Portera"
            ]
          },
          {
            "nombre": "Mariana Cardona",
            "edad": 23,
            "genero": "Femenino",
            "numero_identificacion": 201000403,
            "pruebas": [
              "Defensa central"
            ]
          },
          {
            "nombre": "Daniela Parra",
            "edad": 24,
            "genero": "Femenino",
            "numero_identificacion": 201000404,
            "pruebas": [
              "Lateral derecho"
            ]
          },
          {
            "nombre": "Isabela Muñoz",
            "edad": 25,
            "genero": "Femenino",
            "numero_identificacion": 201000405,
            "pruebas": [
              "Mediocampista"
            ]
          },
          {
            "nombre": "Melissa Gil",
            "edad": 23,
            "genero": "Femenino",
            "numero_identificacion": 201000406,
            "pruebas": [
              "Delantera"
            ]
          },
          {
            "nombre": "Carla García",
            "edad": 24,
            "genero": "Femenino",
            "numero_identificacion": 201000407,
            "pruebas": [
              "Defensa izquierda"
            ]
          },
          {
            "nombre": "Katherine Ramos",
            "edad": 25,
            "genero": "Femenino",
            "numero_identificacion": 201000408,
            "pruebas": [
              "Mediocampista"
            ]
          },
          {
            "nombre": "Adriana Suárez",
            "edad": 24,
            "genero": "Femenino",
            "numero_identificacion": 201000409,
            "pruebas": [
              "Delantera"
            ]
          },
          {
            "nombre": "Diana Herrera",
            "edad": 23,
            "genero": "Femenino",
            "numero_identificacion": 201000410,
            "pruebas": [
              "Lateral izquierdo"
            ]
          },
          {
            "nombre": "Nicol Ruiz",
            "edad": 25,
            "genero": "Femenino",
            "numero_identificacion": 201000411,
            "pruebas": [
              "Mediocampista defensiva"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Bucaramanga",
    "entrenador_jefe": "Luis Ramírez",
    "equipos": [
      {
        "nombre": "Fútbol Bucaramanga Sub-20",
        "categoria": "Sub-20",
        "disciplina": "Fútbol",
        "atletas": [
          {
            "nombre": "Andrés Rivera",
            "edad": 19,
            "genero": "Masculino",
            "numero_identificacion": 111222333
          },
          {
            "nombre": "Camilo Torres",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 444555666
          },
          {
            "nombre": "Esteban Soto",
            "edad": 20,
            "genero": "Masculino",
            "numero_identificacion": 777888999
          },
          {
            "nombre": "Kevin Rojas",
            "edad": 19,
            "genero": "Masculino",
            "numero_identificacion": 101112131
          },
          {
            "nombre": "Luis Pérez",
            "edad": 20,
            "genero": "Masculino",
            "numero_identificacion": 141516171
          },
          {
            "nombre": "Javier Gómez",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 181920212
          },
          {
            "nombre": "Sebastián Díaz",
            "edad": 19,
            "genero": "Masculino",
            "numero_identificacion": 222324252
          },
          {
            "nombre": "Felipe Ramírez",
            "edad": 19,
            "genero": "Masculino",
            "numero_identificacion": 262728293
          },
          {
            "nombre": "David Suárez",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 303132333
          },
          {
            "nombre": "Carlos Montoya",
            "edad": 20,
            "genero": "Masculino",
            "numero_identificacion": 343536373
          }
        ]
      }
    ]
  },
  {
    "nombre": "Manizales",
    "entrenador_jefe": "Ángela Ruiz",
    "equipos": [
      {
        "nombre": "Ciclismo Manizales Junior",
        "categoria": "Junior",
        "disciplina": "Ciclismo",
        "atletas": [
          {
            "nombre": "Pedro Ríos",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 373839404
          },
          {
            "nombre": "Mateo Herrera",
            "edad": 16,
            "genero": "Masculino",
            "numero_identificacion": 414243444
          },
          {
            "nombre": "Julián Lozano",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 454647484
          },
          {
            "nombre": "Héctor Zapata",
            "edad": 16,
            "genero": "Masculino",
            "numero_identificacion": 495051525
          },
          {
            "nombre": "Sara Muñoz",
            "edad": 17,
            "genero": "Femenino",
            "numero_identificacion": 535455565
          },
          {
            "nombre": "Laura Méndez",
            "edad": 16,
            "genero": "Femenino",
            "numero_identificacion": 575859606
          },
          {
            "nombre": "Tatiana León",
            "edad": 17,
            "genero": "Femenino",
            "numero_identificacion": 616263646
          },
          {
            "nombre": "Daniela Arias",
            "edad": 16,
            "genero": "Femenino",
            "numero_identificacion": 656667686
          },
          {
            "nombre": "Carlos Méndez",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 696970707
          },
          {
            "nombre": "Esteban Paz",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 717273747
          }
        ]
      }
    ]
  },
  {
    "nombre": "Cartagena",
    "entrenador_jefe": "Rodrigo Martínez",
    "equipos": [
      {
        "nombre": "Natación Cartagena Libre",
        "categoria": "Libre",
        "disciplina": "Natación",
        "atletas": [
          {
            "nombre": "Mariana Ruiz",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 757677787
          },
          {
            "nombre": "Valentina Pérez",
            "edad": 22,
            "genero": "Femenino",
            "numero_identificacion": 798081828
          },
          {
            "nombre": "Camila Vargas",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 838485868
          },
          {
            "nombre": "Daniela Torres",
            "edad": 23,
            "genero": "Femenino",
            "numero_identificacion": 878889909
          },
          {
            "nombre": "Tatiana Sánchez",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 919293949
          },
          {
            "nombre": "Ana María Díaz",
            "edad": 22,
            "genero": "Femenino",
            "numero_identificacion": 959697989
          },
          {
            "nombre": "Juana García",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 999001002
          },
          {
            "nombre": "Natalia Pineda",
            "edad": 22,
            "genero": "Femenino",
            "numero_identificacion": 1001011021
          },
          {
            "nombre": "Carolina Morales",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 1021031041
          },
          {
            "nombre": "Juliana Herrera",
            "edad": 23,
            "genero": "Femenino",
            "numero_identificacion": 1051061071
          }
        ]
      }
    ]
  },
  {
    "nombre": "Villavicencio",
    "entrenador_jefe": "Oscar Beltrán",
    "equipos": [
      {
        "nombre": "Atletismo Villavicencio Juvenil",
        "categoria": "Juvenil",
        "disciplina": "Atletismo",
        "atletas": [
          {
            "nombre": "Juan Camilo López",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 1081091101,
            "pruebas": [
              "100m",
              "400m"
            ]
          },
          {
            "nombre": "Sebastián Mendoza",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 1111121131,
            "pruebas": [
              "200m",
              "Relevo 4x100"
            ]
          },
          {
            "nombre": "Andrés Felipe Ríos",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 1141151161,
            "pruebas": [
              "800m"
            ]
          },
          {
            "nombre": "Miguel Ángel Torres",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 1171181191,
            "pruebas": [
              "1500m"
            ]
          },
          {
            "nombre": "David Alejandro Díaz",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 1201211221,
            "pruebas": [
              "Salto alto"
            ]
          },
          {
            "nombre": "Camilo Vargas",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 1231241251,
            "pruebas": [
              "Salto largo"
            ]
          },
          {
            "nombre": "Julián Martínez",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 1261271281,
            "pruebas": [
              "Lanzamiento de bala"
            ]
          },
          {
            "nombre": "Felipe Suárez",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 1291301311,
            "pruebas": [
              "100m",
              "200m"
            ]
          },
          {
            "nombre": "Carlos Rivas",
            "edad": 17,
            "genero": "Masculino",
            "numero_identificacion": 1321331341,
            "pruebas": [
              "Relevo 4x100"
            ]
          },
          {
            "nombre": "Samuel Orozco",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 1351361371,
            "pruebas": [
              "Salto triple"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Armenia",
    "entrenador_jefe": "Marina Restrepo",
    "equipos": [
      {
        "nombre": "Ciclismo Armenia Sub-18",
        "categoria": "Sub-18",
        "disciplina": "Ciclismo",
        "atletas": [
          {
            "nombre": "Lucía Herrera",
            "edad": 17,
            "genero": "Femenino",
            "numero_identificacion": 1381391401
          },
          {
            "nombre": "María Torres",
            "edad": 16,
            "genero": "Femenino",
            "numero_identificacion": 1411421431
          },
          {
            "nombre": "Ana López",
            "edad": 17,
            "genero": "Femenino",
            "numero_identificacion": 1441451461
          },
          {
            "nombre": "Daniela Gutiérrez",
            "edad": 16,
            "genero": "Femenino",
            "numero_identificacion": 1471481491
          },
          {
            "nombre": "Isabela Ortiz",
            "edad": 17,
            "genero": "Femenino",
            "numero_identificacion": 1501511521
          },
          {
            "nombre": "Emilia Gómez",
            "edad": 17,
            "genero": "Femenino",
            "numero_identificacion": 1531541551
          },
          {
            "nombre": "Laura Jiménez",
            "edad": 16,
            "genero": "Femenino",
            "numero_identificacion": 1561571581
          },
          {
            "nombre": "Gabriela Castaño",
            "edad": 17,
            "genero": "Femenino",
            "numero_identificacion": 1591601611
          },
          {
            "nombre": "Paula Vargas",
            "edad": 16,
            "genero": "Femenino",
            "numero_identificacion": 1621631641
          },
          {
            "nombre": "Sara Pérez",
            "edad": 17,
            "genero": "Femenino",
            "numero_identificacion": 1651661671
          }
        ]
      }
    ]
  },
  {
    "nombre": "Cali",
    "entrenador_jefe": "Marta Salazar",
    "equipos": [
      {
        "nombre": "Atletismo Cali Sub-20",
        "categoria": "Sub-20",
        "disciplina": "Atletismo",
        "atletas": [
          {
            "nombre": "Kevin Ruiz",
            "edad": 19,
            "genero": "Masculino",
            "numero_identificacion": 501,
            "pruebas": [
              "100m planos",
              "200m planos"
            ]
          },
          {
            "nombre": "Esteban Soto",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 502,
            "pruebas": [
              "Salto largo",
              "Triple salto"
            ]
          },
          {
            "nombre": "Ana Quintero",
            "edad": 19,
            "genero": "Femenino",
            "numero_identificacion": 503,
            "pruebas": [
              "400m planos",
              "800m planos"
            ]
          },
          {
            "nombre": "Luis Bravo",
            "edad": 20,
            "genero": "Masculino",
            "numero_identificacion": 504,
            "pruebas": [
              "Relevo 4x100",
              "200m planos"
            ]
          },
          {
            "nombre": "María López",
            "edad": 18,
            "genero": "Femenino",
            "numero_identificacion": 505,
            "pruebas": [
              "100m planos",
              "Relevo 4x100"
            ]
          },
          {
            "nombre": "Julián Castaño",
            "edad": 19,
            "genero": "Masculino",
            "numero_identificacion": 506,
            "pruebas": [
              "400m vallas"
            ]
          },
          {
            "nombre": "Luisa Méndez",
            "edad": 20,
            "genero": "Femenino",
            "numero_identificacion": 507,
            "pruebas": [
              "1500m",
              "3000m"
            ]
          },
          {
            "nombre": "Camilo Restrepo",
            "edad": 18,
            "genero": "Masculino",
            "numero_identificacion": 508,
            "pruebas": [
              "Relevo 4x400"
            ]
          },
          {
            "nombre": "Sofía Duarte",
            "edad": 19,
            "genero": "Femenino",
            "numero_identificacion": 509,
            "pruebas": [
              "Salto alto",
              "Lanzamiento de jabalina"
            ]
          },
          {
            "nombre": "Carlos Suárez",
            "edad": 20,
            "genero": "Masculino",
            "numero_identificacion": 510,
            "pruebas": [
              "5000m"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Cúcuta",
    "entrenador_jefe": "Andrés Acosta",
    "equipos": [
      {
        "nombre": "Atletismo Cúcuta Sub-20",
        "categoria": "Sub-20",
        "disciplina": "Atletismo",
        "atletas": [
          {
            "nombre": "Daniel Torres",
            "edad": 19,
            "genero": "Masculino",
            "numero_identificacion": 601,
            "pruebas": [
              "100m planos",
              "200m planos"
            ]
          },
          {
            "nombre": "Verónica Díaz",
            "edad": 18,
            "genero": "Femenino",
            "numero_identificacion": 602,
            "pruebas": [
              "Salto largo",
              "Relevo 4x100"
            ]
          },
          {
            "nombre": "Mateo Vargas",
            "edad": 19,
            "genero": "Masculino",
            "numero_identificacion": 603,
            "pruebas": [
              "800m planos"
            ]
          },
          {
            "nombre": "Daniela Flórez",
            "edad": 18,
            "genero": "Femenino",
            "numero_identificacion": 604,
            "pruebas": [
              "100m planos"
            ]
          },
          {
            "nombre": "Felipe Rincón",
            "edad": 20,
            "genero": "Masculino",
            "numero_identificacion": 605,
            "pruebas": [
              "Salto triple",
              "Relevo 4x400"
            ]
          },
          {
            "nombre": "Camila Guerrero",
            "edad": 19,
            "genero": "Femenino",
            "numero_identificacion": 606,
            "pruebas": [
              "400m planos",
              "200m planos"
            ]
          },
          {
            "nombre": "Óscar Bernal",
            "edad": 20,
            "genero": "Masculino",
            "numero_identificacion": 607,
            "pruebas": [
              "1500m"
            ]
          },
          {
            "nombre": "Natalia Gutiérrez",
            "edad": 18,
            "genero": "Femenino",
            "numero_identificacion": 608,
            "pruebas": [
              "Relevo 4x100"
            ]
          },
          {
            "nombre": "Samuel Prieto",
            "edad": 19,
            "genero": "Masculino",
            "numero_identificacion": 609,
            "pruebas": [
              "Lanzamiento de bala"
            ]
          },
          {
            "nombre": "Valentina Pardo",
            "edad": 20,
            "genero": "Femenino",
            "numero_identificacion": 610,
            "pruebas": [
              "100m planos",
              "Relevo 4x100"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Bucaramanga",
    "entrenador_jefe": "Diana Rivas",
    "equipos": [
      {
        "nombre": "Atletismo Bucaramanga Libre",
        "categoria": "Libre",
        "disciplina": "Atletismo",
        "atletas": [
          {
            "nombre": "Pedro Morales",
            "edad": 24,
            "genero": "Masculino",
            "numero_identificacion": 701,
            "pruebas": [
              "100m planos",
              "Relevo 4x100"
            ]
          },
          {
            "nombre": "Lucía Salinas",
            "edad": 23,
            "genero": "Femenino",
            "numero_identificacion": 702,
            "pruebas": [
              "Salto largo",
              "Triple salto"
            ]
          },
          {
            "nombre": "Diego González",
            "edad": 22,
            "genero": "Masculino",
            "numero_identificacion": 703,
            "pruebas": [
              "400m planos"
            ]
          },
          {
            "nombre": "Gabriela Osorio",
            "edad": 25,
            "genero": "Femenino",
            "numero_identificacion": 704,
            "pruebas": [
              "200m planos"
            ]
          },
          {
            "nombre": "Rodrigo Medina",
            "edad": 23,
            "genero": "Masculino",
            "numero_identificacion": 705,
            "pruebas": [
              "Lanzamiento de disco"
            ]
          },
          {
            "nombre": "Laura Téllez",
            "edad": 24,
            "genero": "Femenino",
            "numero_identificacion": 706,
            "pruebas": [
              "100m planos",
              "Relevo 4x100"
            ]
          },
          {
            "nombre": "Andrés Peña",
            "edad": 22,
            "genero": "Masculino",
            "numero_identificacion": 707,
            "pruebas": [
              "3000m",
              "1500m"
            ]
          },
          {
            "nombre": "Juliana Yepes",
            "edad": 23,
            "genero": "Femenino",
            "numero_identificacion": 708,
            "pruebas": [
              "Relevo 4x400"
            ]
          },
          {
            "nombre": "Mauricio Cárdenas",
            "edad": 24,
            "genero": "Masculino",
            "numero_identificacion": 709,
            "pruebas": [
              "100m planos"
            ]
          },
          {
            "nombre": "Tatiana Rojas",
            "edad": 25,
            "genero": "Femenino",
            "numero_identificacion": 710,
            "pruebas": [
              "200m planos",
              "Relevo 4x100"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Ibagué",
    "entrenador_jefe": "Carlos Herrera",
    "equipos": [
      {
        "nombre": "Atletismo Ibagué Libre",
        "categoria": "Libre",
        "disciplina": "Atletismo",
        "atletas": [
          {
            "nombre": "Cristian Vargas",
            "edad": 21,
            "genero": "Masculino",
            "numero_identificacion": 801,
            "pruebas": [
              "400m planos"
            ]
          },
          {
            "nombre": "Lorena Jiménez",
            "edad": 22,
            "genero": "Femenino",
            "numero_identificacion": 802,
            "pruebas": [
              "Salto largo",
              "Relevo 4x100"
            ]
          },
          {
            "nombre": "Brayan Ramírez",
            "edad": 23,
            "genero": "Masculino",
            "numero_identificacion": 803,
            "pruebas": [
              "800m",
              "1500m"
            ]
          },
          {
            "nombre": "Daniela Castro",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 804,
            "pruebas": [
              "Relevo 4x100",
              "200m planos"
            ]
          },
          {
            "nombre": "Jhon Arias",
            "edad": 22,
            "genero": "Masculino",
            "numero_identificacion": 805,
            "pruebas": [
              "100m planos",
              "Salto alto"
            ]
          },
          {
            "nombre": "Nataly Camargo",
            "edad": 23,
            "genero": "Femenino",
            "numero_identificacion": 806,
            "pruebas": [
              "Relevo 4x400"
            ]
          },
          {
            "nombre": "Andrés Pulido",
            "edad": 21,
            "genero": "Masculino",
            "numero_identificacion": 807,
            "pruebas": [
              "3000m"
            ]
          },
          {
            "nombre": "Luisa Zapata",
            "edad": 22,
            "genero": "Femenino",
            "numero_identificacion": 808,
            "pruebas": [
              "Salto triple"
            ]
          },
          {
            "nombre": "Sebastián Gil",
            "edad": 23,
            "genero": "Masculino",
            "numero_identificacion": 809,
            "pruebas": [
              "Lanzamiento de bala"
            ]
          },
          {
            "nombre": "Camila Páez",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 810,
            "pruebas": [
              "200m planos",
              "Relevo 4x100"
            ]
          }
        ]
      }
    ]
  },
  {
    "nombre": "Villavicencio",
    "entrenador_jefe": "María Fernanda Ortega",
    "equipos": [
      {
        "nombre": "Atletismo Villavicencio Sub-23",
        "categoria": "Sub-23",
        "disciplina": "Atletismo",
        "atletas": [
          {
            "nombre": "Santiago Ruiz",
            "edad": 22,
            "genero": "Masculino",
            "numero_identificacion": 901,
            "pruebas": [
              "100m planos",
              "Relevo 4x100"
            ]
          },
          {
            "nombre": "Valeria Mendoza",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 902,
            "pruebas": [
              "Salto largo",
              "400m"
            ]
          },
          {
            "nombre": "Cristian Ayala",
            "edad": 23,
            "genero": "Masculino",
            "numero_identificacion": 903,
            "pruebas": [
              "800m planos"
            ]
          },
          {
            "nombre": "Isabela Figueroa",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 904,
            "pruebas": [
              "100m planos",
              "200m planos"
            ]
          },
          {
            "nombre": "Juan Pablo Ramírez",
            "edad": 22,
            "genero": "Masculino",
            "numero_identificacion": 905,
            "pruebas": [
              "1500m",
              "3000m"
            ]
          },
          {
            "nombre": "Sara Rodríguez",
            "edad": 23,
            "genero": "Femenino",
            "numero_identificacion": 906,
            "pruebas": [
              "Relevo 4x400",
              "400m planos"
            ]
          },
          {
            "nombre": "Tomás Benítez",
            "edad": 21,
            "genero": "Masculino",
            "numero_identificacion": 907,
            "pruebas": [
              "Salto triple"
            ]
          },
          {
            "nombre": "Emily Contreras",
            "edad": 22,
            "genero": "Femenino",
            "numero_identificacion": 908,
            "pruebas": [
              "Lanzamiento de disco"
            ]
          },
          {
            "nombre": "Nicolás Ruiz",
            "edad": 23,
            "genero": "Masculino",
            "numero_identificacion": 909,
            "pruebas": [
              "100m planos"
            ]
          },
          {
            "nombre": "Daniela Torres",
            "edad": 21,
            "genero": "Femenino",
            "numero_identificacion": 910,
            "pruebas": [
              "200m planos",
              "Relevo 4x100"
            ]
          }
        ]
      }
    ]
  }
])



//  competencias
db.competencias.insertMany([
  {
    "nombre": "Campeonato Nacional de Atletismo Masculino Libre 2025",
    "disciplina": "Atletismo",
    "categoria": "Libre",
    "fecha_inicio": "2025-09-15",
    "fecha_fin": "2025-09-16",
    "lugar": "Estadio Central de Manizales",
    "delegaciones_participantes": [
      {
        "delegacion_id": {
          "$oid": "6893c179cd42a3ae152afec0"
        },
        "equipo_nombre": "Atletismo Medellín Libre"
      },
      {
        "delegacion_id": {
          "$oid": "6893c179cd42a3ae152afec4"
        },
        "equipo_nombre": "Atletismo Manizales Libre"
      }
    ],
    "eventos": [
      {
        "nombre_evento": "100m planos masculino",
        "fecha": "2025-09-15",
        "hora": "10:30",
        "participantes": [
          {
            "delegacion_id": {
              "$oid": "6893c179cd42a3ae152afec0"
            },
            "nombre_atleta": "Juan Pérez",
            "numero_identificacion": 123456789
          },
          {
            "delegacion_id": {
              "$oid": "6893c179cd42a3ae152afec4"
            },
            "nombre_atleta": "David Ocampo",
            "numero_identificacion": 500500501
          }
        ],
        "resultados": [
          {
            "nombre_atleta": "David Ocampo",
            "tiempo": "10.89s",
            "puesto": 1
          },
          {
            "nombre_atleta": "Juan Pérez",
            "tiempo": "11.01s",
            "puesto": 2
          }
        ]
      }
    ]
  },
  {
    "nombre": "Torneo Regional de Natación Caribe 2025",
    "disciplina": "Natación",
    "categoria": "Junior",
    "fecha_inicio": "2025-08-20",
    "fecha_fin": "2025-08-21",
    "lugar": "Piscinas Olímpicas de Cartagena",
    "delegaciones_participantes": [
      {
        "delegacion_id": {
          "$oid": "6893c179cd42a3ae152afec3"
        },
        "equipo_nombre": "Natación Barranquilla Junior"
      },
      {
        "delegacion_id": {
          "$oid": "6893c31dcd42a3ae152afecc"
        },
        "equipo_nombre": "Natación Cartagena Libre"
      }
    ],
    "eventos": [
      {
        "nombre_evento": "100m libre femenino",
        "fecha": "2025-08-20",
        "hora": "09:00",
        "participantes": [
          {
            "delegacion_id": {
              "$oid": "6893c179cd42a3ae152afec3"
            },
            "nombre_atleta": "Lucía Benítez",
            "numero_identificacion": 400400401
          },
          {
            "delegacion_id": {
              "$oid": "6893c31dcd42a3ae152afecc"
            },
            "nombre_atleta": "Mariana Ruiz",
            "numero_identificacion": 757677787
          }
        ],
        "resultados": [
          {
            "nombre_atleta": "Mariana Ruiz",
            "tiempo": "1:02.10",
            "puesto": 1
          },
          {
            "nombre_atleta": "Lucía Benítez",
            "tiempo": "1:03.85",
            "puesto": 2
          }
        ]
      }
    ]
  },
  {
    "nombre": "Clásica Nacional de Ciclismo en Ruta 2025",
    "disciplina": "Ciclismo",
    "categoria": "Abierta",
    "fecha_inicio": "2025-09-10",
    "fecha_fin": "2025-09-11",
    "lugar": "Circuito Vial de Buga",
    "delegaciones_participantes": [
      {
        "delegacion_id": {
          "$oid": "6893c179cd42a3ae152afec2"
        },
        "equipo_nombre": "Ciclismo Cali Elite"
      },
      {
        "delegacion_id": {
          "$oid": "6893c31dcd42a3ae152afecb"
        },
        "equipo_nombre": "Ciclismo Manizales Junior"
      }
    ],
    "eventos": [
      {
        "nombre_evento": "Ruta masculina - 40 km",
        "fecha": "2025-09-10",
        "hora": "08:00",
        "participantes": [
          {
            "delegacion_id": {
              "$oid": "6893c179cd42a3ae152afec2"
            },
            "nombre_atleta": "Juan Herrera",
            "numero_identificacion": 300300301
          },
          {
            "delegacion_id": {
              "$oid": "6893c31dcd42a3ae152afecb"
            },
            "nombre_atleta": "Pedro Ríos",
            "numero_identificacion": 373839404
          }
        ],
        "resultados": [
          {
            "nombre_atleta": "Juan Herrera",
            "tiempo": "58:23",
            "puesto": 1
          },
          {
            "nombre_atleta": "Pedro Ríos",
            "tiempo": "1:01:12",
            "puesto": 2
          }
        ]
      }
    ]
  },
  {
    "nombre": "Liga Nacional Femenina de Fútbol 2025 - Fecha 3",
    "disciplina": "Fútbol",
    "categoria": "Libre",
    "fecha_inicio": "2025-08-25",
    "fecha_fin": "2025-08-25",
    "lugar": "Estadio Metropolitano de Ibagué",
    "delegaciones_participantes": [
      {
        "delegacion_id": {
          "$oid": "6893c2d2cd42a3ae152afec6"
        },
        "equipo_nombre": "Tigresas Ibagué"
      },
      {
        "delegacion_id": {
          "$oid": "6893c2d2cd42a3ae152afec9"
        },
        "equipo_nombre": "Montería Femenino Libre"
      }
    ],
    "eventos": [
      {
        "nombre_evento": "Fútbol femenino - Partido completo",
        "fecha": "2025-08-25",
        "hora": "16:00",
        "participantes": [
          {
            "delegacion_id": {
              "$oid": "6893c2d2cd42a3ae152afec6"
            },
            "nombre_atleta": "Laura Álvarez",
            "numero_identificacion": 201000101
          },
          {
            "delegacion_id": {
              "$oid": "6893c2d2cd42a3ae152afec9"
            },
            "nombre_atleta": "Tatiana Romero",
            "numero_identificacion": 201000401
          }
        ],
        "resultados": [
          {
            "nombre_atleta": "Laura Álvarez",
            "goles": 2,
            "puesto": 1
          },
          {
            "nombre_atleta": "Tatiana Romero",
            "goles": 1,
            "puesto": 2
          }
        ]
      }
    ]
  },
  {
    "nombre": "Campeonato Nacional de Relevos 4x100 Femenino 2025",
    "disciplina": "Atletismo",
    "categoria": "Libre",
    "fecha_inicio": "2025-09-30",
    "fecha_fin": "2025-09-30",
    "lugar": "Unidad Deportiva Metropolitana de Cali",
    "delegaciones_participantes": [
      {
        "delegacion_id": {
          "$oid": "6893c179cd42a3ae152afec0"
        },
        "equipo_nombre": "Atletismo Medellín Libre"
      },
      {
        "delegacion_id": {
          "$oid": "6893c179cd42a3ae152afec4"
        },
        "equipo_nombre": "Atletismo Manizales Libre"
      },
      {
        "delegacion_id": {
          "$oid": "6893c364cd42a3ae152afed2"
        },
        "equipo_nombre": "Atletismo Ibagué Libre"
      }
    ],
    "eventos": [
      {
        "nombre_evento": "Relevo 4x100 femenino",
        "fecha": "2025-09-30",
        "hora": "14:00",
        "participantes": [
          {
            "delegacion_id": {
              "$oid": "6893c179cd42a3ae152afec0"
            },
            "nombre_atleta": "Natalia Castro",
            "numero_identificacion": 100100102
          },
          {
            "delegacion_id": {
              "$oid": "6893c179cd42a3ae152afec0"
            },
            "nombre_atleta": "Valentina López",
            "numero_identificacion": 100100106
          },
          {
            "delegacion_id": {
              "$oid": "6893c179cd42a3ae152afec4"
            },
            "nombre_atleta": "Manuela Cruz",
            "numero_identificacion": 500500505
          },
          {
            "delegacion_id": {
              "$oid": "6893c179cd42a3ae152afec4"
            },
            "nombre_atleta": "Daniela Pérez",
            "numero_identificacion": 500500509
          },
          {
            "delegacion_id": {
              "$oid": "6893c364cd42a3ae152afed2"
            },
            "nombre_atleta": "Lorena Jiménez",
            "numero_identificacion": 802
          },
          {
            "delegacion_id": {
              "$oid": "6893c364cd42a3ae152afed2"
            },
            "nombre_atleta": "Daniela Castro",
            "numero_identificacion": 804
          }
        ],
        "resultados": [
          {
            "nombre_atleta": "Manuela Cruz",
            "tiempo": "46.70s",
            "puesto": 1
          },
          {
            "nombre_atleta": "Lorena Jiménez",
            "tiempo": "47.25s",
            "puesto": 2
          },
          {
            "nombre_atleta": "Natalia Castro",
            "tiempo": "47.90s",
            "puesto": 3
          }
        ]
      }
    ]
  },
  {
    "nombre": "Torneo Nacional Sub-20 Masculino 2025 - Jornada 1",
    "disciplina": "Fútbol",
    "categoria": "Sub-20",
    "fecha_inicio": "2025-09-12",
    "fecha_fin": "2025-09-12",
    "lugar": "Cancha Sur de Bogotá",
    "delegaciones_participantes": [
      {
        "delegacion_id": {
          "$oid": "6893c179cd42a3ae152afec1"
        },
        "equipo_nombre": "Fútbol Bogotá Sub-20"
      },
      {
        "delegacion_id": {
          "$oid": "6893c31dcd42a3ae152afeca"
        },
        "equipo_nombre": "Fútbol Bucaramanga Sub-20"
      }
    ],
    "eventos": [
      {
        "nombre_evento": "Fútbol masculino - Partido completo",
        "fecha": "2025-09-12",
        "hora": "11:00",
        "participantes": [
          {
            "delegacion_id": {
              "$oid": "6893c179cd42a3ae152afec1"
            },
            "nombre_atleta": "Carlos Méndez",
            "numero_identificacion": 200200201
          },
          {
            "delegacion_id": {
              "$oid": "6893c31dcd42a3ae152afeca"
            },
            "nombre_atleta": "Andrés Rivera",
            "numero_identificacion": 111222333
          }
        ],
        "resultados": [
          {
            "nombre_atleta": "Andrés Rivera",
            "goles": 2,
            "puesto": 1
          },
          {
            "nombre_atleta": "Carlos Méndez",
            "goles": 1,
            "puesto": 2
          }
        ]
      }
    ]
  },
  {
    "nombre": "Copa Nacional Sub-23 de Atletismo Masculino 2025",
    "disciplina": "Atletismo",
    "categoria": "Sub-23",
    "fecha_inicio": "2025-10-02",
    "fecha_fin": "2025-10-02",
    "lugar": "Estadio Municipal de Tunja",
    "delegaciones_participantes": [
      {
        "delegacion_id": {
          "$oid": "6893c364cd42a3ae152afed3"
        },
        "equipo_nombre": "Atletismo Villavicencio Sub-23"
      },
      {
        "delegacion_id": {
          "$oid": "6893c2d2cd42a3ae152afec5"
        },
        "equipo_nombre": "Cartagena FC Sub-23"
      }
    ],
    "eventos": [
      {
        "nombre_evento": "100m planos masculino",
        "fecha": "2025-10-02",
        "hora": "09:30",
        "participantes": [
          {
            "delegacion_id": {
              "$oid": "6893c364cd42a3ae152afed3"
            },
            "nombre_atleta": "Santiago Ruiz",
            "numero_identificacion": 901
          },
          {
            "delegacion_id": {
              "$oid": "6893c2d2cd42a3ae152afec5"
            },
            "nombre_atleta": "Andrés Suárez",
            "numero_identificacion": 201000001
          }
        ],
        "resultados": [
          {
            "nombre_atleta": "Santiago Ruiz",
            "tiempo": "10.78s",
            "puesto": 1
          },
          {
            "nombre_atleta": "Andrés Suárez",
            "tiempo": "11.04s",
            "puesto": 2
          }
        ]
      }
    ]
  },
  {
    "nombre": "Torneo Interligas Multideporte 2025",
    "disciplina": "Multideporte",
    "categoria": "Libre",
    "fecha_inicio": "2025-09-27",
    "fecha_fin": "2025-09-28",
    "lugar": "Complejo Deportivo del Caribe",
    "delegaciones_participantes": [
      {
        "delegacion_id": {
          "$oid": "6893c179cd42a3ae152afec0"
        },
        "equipo_nombre": "Atletismo Medellín Libre"
      },
      {
        "delegacion_id": {
          "$oid": "6893c179cd42a3ae152afec3"
        },
        "equipo_nombre": "Natación Barranquilla Junior"
      }
    ],
    "eventos": [
      {
        "nombre_evento": "100m planos femenino (Atletismo)",
        "fecha": "2025-09-27",
        "hora": "09:00",
        "participantes": [
          {
            "delegacion_id": {
              "$oid": "6893c179cd42a3ae152afec0"
            },
            "nombre_atleta": "Valentina López",
            "numero_identificacion": 100100106
          }
        ],
        "resultados": [
          {
            "nombre_atleta": "Valentina López",
            "tiempo": "12.01s",
            "puesto": 1
          }
        ]
      },
      {
        "nombre_evento": "100m libre femenino (Natación)",
        "fecha": "2025-09-28",
        "hora": "10:30",
        "participantes": [
          {
            "delegacion_id": {
              "$oid": "6893c179cd42a3ae152afec3"
            },
            "nombre_atleta": "Lucía Benítez",
            "numero_identificacion": 400400401
          }
        ],
        "resultados": [
          {
            "nombre_atleta": "Lucía Benítez",
            "tiempo": "1:02.88",
            "puesto": 1
          }
        ]
      }
    ]
  },
  {
    "nombre": "Final Nacional de Ciclismo Contrarreloj Femenino 2025",
    "disciplina": "Ciclismo",
    "categoria": "Abierta",
    "fecha_inicio": "2025-10-10",
    "fecha_fin": "2025-10-10",
    "lugar": "Autopista del Café",
    "delegaciones_participantes": [
      {
        "delegacion_id": {
          "$oid": "6893c179cd42a3ae152afec2"
        },
        "equipo_nombre": "Ciclismo Cali Elite"
      },
      {
        "delegacion_id": {
          "$oid": "6893c31dcd42a3ae152afece"
        },
        "equipo_nombre": "Ciclismo Armenia Sub-18"
      }
    ],
    "eventos": [
      {
        "nombre_evento": "Contrarreloj femenina 15 km",
        "fecha": "2025-10-10",
        "hora": "08:00",
        "participantes": [
          {
            "delegacion_id": {
              "$oid": "6893c179cd42a3ae152afec2"
            },
            "nombre_atleta": "María Ruiz",
            "numero_identificacion": 300300303
          },
          {
            "delegacion_id": {
              "$oid": "6893c31dcd42a3ae152afece"
            },
            "nombre_atleta": "Lucía Herrera",
            "numero_identificacion": 1381391401
          }
        ],
        "resultados": [
          {
            "nombre_atleta": "María Ruiz",
            "tiempo": "25:30",
            "puesto": 1
          },
          {
            "nombre_atleta": "Lucía Herrera",
            "tiempo": "26:45",
            "puesto": 2
          }
        ]
      }
    ]
  },
  {
    "nombre": "Triangular Nacional de Fútbol Masculino Libre 2025",
    "disciplina": "Fútbol",
    "categoria": "Libre",
    "fecha_inicio": "2025-09-19",
    "fecha_fin": "2025-09-21",
    "lugar": "Estadio Alfonso López",
    "delegaciones_participantes": [
      {
        "delegacion_id": {
          "$oid": "6893c2d2cd42a3ae152afec8"
        },
        "equipo_nombre": "Auriverdes Bucaramanga"
      },
      {
        "delegacion_id": {
          "$oid": "6893c2d2cd42a3ae152afec5"
        },
        "equipo_nombre": "Cartagena FC Sub-23"
      },
      {
        "delegacion_id": {
          "$oid": "6893c2d2cd42a3ae152afec9"
        },
        "equipo_nombre": "Montería Femenino Libre"
      }
    ],
    "eventos": [
      {
        "nombre_evento": "Partido 1: Bucaramanga vs Cartagena",
        "fecha": "2025-09-19",
        "hora": "17:00",
        "participantes": [
          {
            "delegacion_id": {
              "$oid": "6893c2d2cd42a3ae152afec8"
            },
            "nombre_atleta": "Oscar Medina",
            "numero_identificacion": 201000301
          },
          {
            "delegacion_id": {
              "$oid": "6893c2d2cd42a3ae152afec5"
            },
            "nombre_atleta": "Mario Ríos",
            "numero_identificacion": 201000006
          }
        ],
        "resultados": [
          {
            "nombre_atleta": "Oscar Medina",
            "goles": 1,
            "puesto": 1
          },
          {
            "nombre_atleta": "Mario Ríos",
            "goles": 1,
            "puesto": 1
          }
        ]
      },
      {
        "nombre_evento": "Partido 2: Bucaramanga vs Montería",
        "fecha": "2025-09-20",
        "hora": "17:00",
        "participantes": [
          {
            "delegacion_id": {
              "$oid": "6893c2d2cd42a3ae152afec8"
            },
            "nombre_atleta": "Kevin Giraldo",
            "numero_identificacion": 201000306
          },
          {
            "delegacion_id": {
              "$oid": "6893c2d2cd42a3ae152afec9"
            },
            "nombre_atleta": "Tatiana Romero",
            "numero_identificacion": 201000401
          }
        ],
        "resultados": [
          {
            "nombre_atleta": "Kevin Giraldo",
            "goles": 2,
            "puesto": 1
          },
          {
            "nombre_atleta": "Tatiana Romero",
            "goles": 1,
            "puesto": 2
          }
        ]
      },
      {
        "nombre_evento": "Partido 3: Cartagena vs Montería",
        "fecha": "2025-09-21",
        "hora": "17:00",
        "participantes": [
          {
            "delegacion_id": {
              "$oid": "6893c2d2cd42a3ae152afec5"
            },
            "nombre_atleta": "Oscar García",
            "numero_identificacion": 201000009
          },
          {
            "delegacion_id": {
              "$oid": "6893c2d2cd42a3ae152afec9"
            },
            "nombre_atleta": "Melissa Gil",
            "numero_identificacion": 201000406
          }
        ],
        "resultados": [
          {
            "nombre_atleta": "Oscar García",
            "goles": 3,
            "puesto": 1
          },
          {
            "nombre_atleta": "Melissa Gil",
            "goles": 1,
            "puesto": 2
          }
        ]
      }
    ]
  }
])

db.disciplinas.insertMany([
  {
    nombre: "Atletismo",
    tipo: "Individual y por equipos",
    descripcion: "Pruebas de velocidad, resistencia, saltos y lanzamientos"
  },
  {
    nombre: "Fútbol",
    tipo: "Colectivo",
    descripcion: "Deporte en equipo con el objetivo de marcar más goles que el oponente"
  },
  {
    nombre: "Ciclismo",
    tipo: "Individual y por equipos",
    descripcion: "Competencias en ruta, pista y contrarreloj"
  },
  {
    nombre: "Natación",
    tipo: "Individual y por relevos",
    descripcion: "Pruebas en diferentes estilos y distancias en piscina"
  }
])
