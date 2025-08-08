
# Torneo Deportivo Internacional

## 📌 Autor
**Michel Rodriguez**

---

## 📖 Descripción del proyecto
Este proyecto implementa una base de datos en **MongoDB** para gestionar un **Torneo Deportivo Internacional**
La base de datos almacena información sobre delegaciones participantes, competencias y disciplinas, permitiendo consultas útiles para la organización y análisis del evento.

---

## 🗂 Colecciones incluidas
1. **delegaciones**  
   Contiene información sobre las delegaciones participantes, sus equipos y atletas.

2. **competencias**  
   Registra los eventos oficiales del torneo, incluyendo disciplina, categoría, fechas y equipos participantes.

3. **disciplinas**  
   Lista de disciplinas deportivas del torneo, con tipo y descripción.

---

## 📂 Estructura del repositorio
```
/torneo-deportivo-internacional
│
├── README.md # Información general y ejecución

├── modelo_de_datos.md # Explicación de colecciones y campos

├── inserciones.js # Inserciones de datos en MongoDB

├── consultas_sencillas.js # 5 consultas sin operadores

├── consultas_operadores.js # 10 consultas con operadores
```
---


## ⚙️ Instrucciones de ejecución

### **1. Crear la base de datos**
En la consola de MongoDB, selecciona la base de datos (o créala si no existe):
```js
use torneo2025
```

### 2. Insertar los datos
Ejecuta el contenido del archivo inserciones.js para crear e insertar los documentos en cada colección:
```
load("inserciones.js")
```
#### Este archivo incluye:

- Inserciones para `delegaciones` (desde tu JSON real).

- Inserciones para `competencias` (desde tu JSON real).

- Inserciones para `disciplinas` (agregadas para complementar el modelo).

### 3. Ejecutar las consultas
Consultas sencillas (sin operadores):

- Consultas sencillas (sin operadores)
```
load("consultas_sencillas.js")

```
- Consultas con operadores:
```
load("consultas_operadores.js")

```
---
## 📊 Consultas implementadas
###  Consultas sencillas (5)
- Buscar todos los equipos de Atletismo.

- Consultar atletas de la delegación Medellín.

 - Mostrar competencias de Natación.

- Listar delegaciones con equipos de Fútbol.

- Consultar todas las disciplinas registradas.

###  Consultas con operadores (10)
- Equipos con más de 10 atletas.

- Atletas con edad mayor a 25 años.

- Competencias posteriores al 1 de septiembre de 2025.

- Delegaciones con equipos de Fútbol o Ciclismo.

- Competencias cuya categoría no sea Libre.

- Delegaciones con atletas menores de 20 años.

- Competencias de Atletismo o Natación.

- Delegaciones con equipos en categoría “Sub-20” o “Junior”.

- Atletas que compitan en pruebas con la palabra "Relevo".

- Competencias que duren más de un día.

--- 
### 📌 Notas
- Los datos de delegaciones y competencias provienen directamente de los archivos JSON entregados.

- La colección disciplinas se creó para centralizar y normalizar los nombres y descripciones de los deportes.

 - Las consultas están adaptadas a los datos reales, por lo que devolverán resultados válidos en tu base.

--- 