# 🏆 Ultimate Sports

Proyecto académico para diseñar e implementar una **base de datos NoSQL en MongoDB** que gestione un **Torneo Deportivo Internacional** organizado por *Ultimate sports*.  
La base de datos permite registrar delegaciones, equipos y atletas, así como realizar consultas para obtener los datos de cada colección

---

## 📌 Descripción del Proyecto

Este proyecto tiene como objetivo:

- Registrar **delegaciones y países participantes**
- Gestionar **equipos deportivos y disciplinas**
- Guardar información de **atletas y sus datos personales**
- Registrar **medallas ganadas y logros históricos**
- Permitir **consultas simples y avanzadas** para análisis del torneo

---

## 📂 Estructura del Repositorio
    

    ├── README.md Información general y ejecución
    ├── modelo_de_datos.md Explicación de colecciones y campos
    ├── inserciones.js Datos insertados por colección
    ├── consultas_sencillas.js 5 consultas sin operadores
    ├── consultas_operadores.js 10 consultas con 

---

## 🗄️ Colecciones de la Base de Datos

### 1️⃣ delegaciones
- Contiene la información de los países participantes y sus medallas.
- **Campos principales:**  
  `id_delegacion`, `pais`, `equipos[]`,  
  `medallas_gandas { oro, plata, bronce }`

### 2️⃣ equipos
- Guarda los equipos por disciplina, su delegación y logros.
- **Campos principales:**  
  `id_equipo`, `nombre_equipo`, `deporte`, `id_delegacion`,  
  `ultima_participacion[]`, `integrantes[]`

### 3️⃣ atletas
- Información de los atletas y su relación con un equipo.
- **Campos principales:**  
  `id_atleta`, `nombre_atleta`, `edad`, `sexo`, `pais`, `deporte`, `id_equipo`

---

## ▶️ Instrucciones para Ejecutar

1. Abrir **Mongo Shell** o **MongoDB Compass**
2. Crear la base de datos:
   ```js
   use torneo
   ```
3. Cargar los datos desde inserciones.js:
    ```js
    load("inserciones.js")
    ```
4. Verificar colecciones y datos insertados:
    ```js
    show collections
    db.delegaciones.find().pretty()
    db.equipos.find().pretty()
    db.atletas.find().pretty()
    ```
5. Ejecutar las consultas:
    ```js
    load("consultas_sencillas.js")
    load("consultas_operadores.js")
    ```

## 🔍 Consultas Incluidas
### Consultas sencillas (5)
- Buscar equipos de un deporte específico

- Mostrar atletas de un país

- Filtrar atletas por sexo

- Mostrar fecha de participación

- Mostrar premios ganados

### Consultas con operadores (10)
- Atletas entre ciertas edades

- Delegaciones con más de X medallas

- Equipos con última participación posterior a cierto año

- Delegaciones con ciertos equipos

- Delegaciones con cierta cantidad de equipos registrados

- Atletas de cierto sexo

- Atletas con cierta edad o pais donde nacieron

## 🤝 Participantes
- **Camila Florez** 
---

## 📜 Contacto GitHub
- https://github.com/CamilaFlorez12