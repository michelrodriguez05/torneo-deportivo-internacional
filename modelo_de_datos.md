# Modelo de Datos – Torneo Deportivo Internacional

## 1. Contexto
La base de datos almacena la información del **Torneo Deportivo Internacional** organizado por *GlobalSports Union*, donde participan delegaciones de diferentes países en múltiples disciplinas.  
El modelo permite registrar delegaciones, competencias y disciplinas, facilitando consultas para la planificación y análisis del evento.

---

## 2. Colecciones creadas

### **1. delegaciones**
Representa a las delegaciones participantes en el torneo, incluyendo sus equipos y atletas.

**Campos principales:**
- `_id` *(ObjectId)* – Identificador único.
- `nombre` *(string)* – Nombre de la delegación (generalmente la ciudad o región).
- `entrenador_jefe` *(string)* – Nombre del entrenador principal de la delegación.
- `equipos` *(array de documentos)* – Lista de equipos que representan a la delegación.
  - `nombre` *(string)* – Nombre del equipo.
  - `categoria` *(string)* – Categoría de competencia (ej. “Libre”, “Sub-20”).
  - `disciplina` *(string)* – Disciplina deportiva del equipo.
  - `atletas` *(array de documentos)* – Datos de los atletas pertenecientes al equipo.
    - `nombre` *(string)* – Nombre completo del atleta.
    - `edad` *(number)* – Edad del atleta.
    - `numero_identificacion` *(number)* – Documento o número único de identificación.
    - `pruebas` *(array de strings)* – Pruebas o modalidades en las que compite.

**Ejemplo de documento:**
```json
{
  "_id": { "$oid": "6893c179cd42a3ae152afec0" },
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
          "numero_identificacion": 123456789,
          "pruebas": ["100m planos", "Relevo 4x100"]
        }
      ]
    }
  ]
}
```


### 2. competencias
Registra los eventos deportivos oficiales del torneo.

Campos principales:

- _id (ObjectId) – Identificador único.

- nombre (string) – Nombre de la competencia.

- disciplina (string) – Disciplina en la que se realiza la competencia.

- categoria (string) – Categoría de la competencia (ej. “Libre”, “Sub-20”).

-  fecha_inicio (string, formato YYYY-MM-DD) – Fecha de inicio.

- fecha_fin (string, formato YYYY-MM-DD) – Fecha de finalización.

- lugar (string) – Lugar donde se realiza la competencia.

- equipos_participantes (array de strings) – Nombres de los equipos que participan.

### ejemplo:
```json
{
  "_id": { "$oid": "68a7c179cd42a3ae152afecf" },
  "nombre": "Final Atletismo 100m Masculino",
  "disciplina": "Atletismo",
  "categoria": "Libre",
  "fecha_inicio": "2025-08-05",
  "fecha_fin": "2025-08-05",
  "lugar": "Estadio Olímpico",
  "equipos_participantes": ["Atletismo Medellín Libre", "Atletismo Bogotá Libre"]
}
```

### 3. disciplinas
Lista de disciplinas deportivas incluidas en el torneo.

Campos principales:

- _id (ObjectId) – Identificador único.

- nombre (string) – Nombre de la disciplina.

- tipo (string) – Tipo de disciplina (individual, colectivo o mixto).

- descripcion (string) – Breve descripción de la disciplina.

### Ejemplo
```json
{
  "nombre": "Atletismo",
  "tipo": "Individual y por equipos",
  "descripcion": "Pruebas de velocidad, resistencia, saltos y lanzamientos"
}
```

### 3. Justificación de la estructura
Modularidad: Se separaron las colecciones para organizar la información de forma clara: delegaciones (quién compite), competencias (dónde y cuándo compiten) y disciplinas (qué deportes existen).

Escalabilidad: Es posible agregar más disciplinas, delegaciones o competencias sin alterar la estructura.

Flexibilidad: Se usan arrays y subdocumentos para representar relaciones uno-a-muchos (ej. una delegación con varios equipos y atletas).

Consultas eficientes: La estructura permite consultas por país, disciplina, fechas, categorías y estadísticas sin necesidad de uniones complejas.

### 4. Relaciones entre colecciones
- `delegaciones` ↔ `competencias`: Se relacionan mediante el nombre del equipo y la `disciplina`.

- `competencias`↔ `disciplinas`: Se relacionan por el campo disciplina.

- `delegaciones` ↔ `disciplinas`: Cada equipo de una delegación indica en qué disciplina participa.



