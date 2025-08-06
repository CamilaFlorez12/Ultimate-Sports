db.delegaciones.insertMany([{
    "id_delegacion": "01",
    "pais": "Estados Unidos",
    "equipos": [
        "01",
        "04",
        "07"
    ],
    "medallas_gandas": {
        "oro": 2,
        "plata": 5,
        "bronce": 0
    }
},
{
    "id_delegacion": "02",
    "pais": "Canadá",
    "equipos": [],
    "medallas_gandas": {
        "oro": 1,
        "plata": 2,
        "bronce": 3
    }
},
{
    "id_delegacion": "03",
    "pais": "Brasil",
    "equipos": [
        "08"
    ],
    "medallas_gandas": {
        "oro": 3,
        "plata": 1,
        "bronce": 2
    }
},
{
    "id_delegacion": "04",
    "pais": "Japón",
    "equipos": [
        "02"
    ],
    "medallas_gandas": {
        "oro": 4,
        "plata": 2,
        "bronce": 1
    }
},
{
    "id_delegacion": "05",
    "pais": "Francia",
    "equipos": [
        "03"
    ],
    "medallas_gandas": {
        "oro": 2,
        "plata": 3,
        "bronce": 4
    }
},
{
    "id_delegacion": "07",
    "pais": "Italia",
    "equipos": [
        "05"
    ],
    "medallas_gandas": {
        "oro": 3,
        "plata": 2,
        "bronce": 1
    }
},
{
    "id_delegacion": "11",
    "pais": "Sudáfrica",
    "equipos": [
        "06"
    ],
    "medallas_gandas": {
        "oro": 1,
        "plata": 0,
        "bronce": 2
    }
},
{
    "id_delegacion": "12",
    "pais": "España",
    "equipos": [
        "09"
    ],
    "medallas_gandas": {
        "oro": 2,
        "plata": 1,
        "bronce": 3
    }
},
{
    "id_delegacion": "13",
    "pais": "México",
    "equipos": [
        "10"
    ],
    "medallas_gandas": {
        "oro": 0,
        "plata": 2,
        "bronce": 3
    }
},
{
    "id_delegacion": "16",
    "pais": "Australia",
    "equipos": [
        "11",
        "12"
    ],
    "medallas_gandas": {
        "oro": 5,
        "plata": 3,
        "bronce": 2
    }
},
{
    "id_delegacion": "17",
    "pais": "Reino Unido",
    "equipos": [
        "13",
        "14"
    ],
    "medallas_gandas": {
        "oro": 4,
        "plata": 2,
        "bronce": 3
    }

}])

db.equipos.insertMany([{
    "id_equipo": "01",
      "nombre_equipo": "Chicago Bulls",
      "deporte": "Baloncesto",
      "id_delegacion": "01",
      "ultima_participacion": [{ "fecha": "1998", "premio": "Campeonato NBA" }],
      "integrantes": [{ "id_atleta": "01", "nombre": "Coby White", "edad": 20 }]
    },
    {
      "id_equipo": "02",
      "nombre_equipo": "Los Angeles Lakers",
      "deporte": "Béisbol",
      "id_delegacion": "04",
      "ultima_participacion": [{ "fecha": "2020", "premio": "Campeonato NBA" }],
      "integrantes": [{ "id_atleta": "02", "nombre": "Naomi Osaka", "edad": 27 }]
    },
    {
      "id_equipo": "03",
      "nombre_equipo": "New York Yankees",
      "deporte": "Esgrima",
      "id_delegacion": "05",
      "ultima_participacion": [{ "fecha": "2009", "premio": "Serie Mundial" }],
      "integrantes": [{ "id_atleta": "03", "nombre": "Kylian Mbappé", "edad": 26 }]
    },
    {
      "id_equipo": "04",
      "nombre_equipo": "Golden State Warriors",
      "deporte": "Gimnasia",
      "id_delegacion": "01",
      "ultima_participacion": [{ "fecha": "2022", "premio": "Campeonato NBA" }],
      "integrantes": [{ "id_atleta": "04", "nombre": "Simone Biles", "edad": 28 }]
    },
    {
      "id_equipo": "05",
      "nombre_equipo": "Boston Red Sox",
      "deporte": "Ciclismo",
      "id_delegacion": "07",
      "ultima_participacion": [{ "fecha": "2018", "premio": "Serie Mundial" }],
      "integrantes": [{ "id_atleta": "05", "nombre": "Yulimar Rojas", "edad": 29 }]
    },
    {
      "id_equipo": "06",
      "nombre_equipo": "Miami Heat",
      "deporte": "Atletismo",
      "id_delegacion": "11",
      "ultima_participacion": [{ "fecha": "2013", "premio": "Campeonato NBA" }],
      "integrantes": [{ "id_atleta": "06", "nombre": "Novak Djokovic", "edad": 38 }]
    },
    {
      "id_equipo": "07",
      "nombre_equipo": "San Antonio Spurs",
      "deporte": "Natación",
      "id_delegacion": "01",
      "ultima_participacion": [{ "fecha": "2014", "premio": "Campeonato NBA" }],
      "integrantes": [{ "id_atleta": "07", "nombre": "Katie Ledecky", "edad": 28 }]
    },
    {
      "id_equipo": "08",
      "nombre_equipo": "Houston Astros",
      "deporte": "Atletismo",
      "id_delegacion": "03",
      "ultima_participacion": [{ "fecha": "2022", "premio": "Serie Mundial" }],
      "integrantes": [{ "id_atleta": "08", "nombre": "Eliud Kipchoge", "edad": 40 }]
    },
    {
      "id_equipo": "09",
      "nombre_equipo": "Phoenix Suns",
      "deporte": "Ciclismo",
      "id_delegacion": "12",
      "ultima_participacion": [{ "fecha": "2021", "premio": "Subcampeón NBA" }],
      "integrantes": [{ "id_atleta": "09", "nombre": "Aitana Bonmatí", "edad": 27 }]
    },
    {
      "id_equipo": "10",
      "nombre_equipo": "Atlanta Braves",
      "deporte": "Clavados",
      "id_delegacion": "13",
      "ultima_participacion": [{ "fecha": "2021", "premio": "Serie Mundial" }],
      "integrantes": [{ "id_atleta": "10", "nombre": "Sunisa Lee", "edad": 22 }]
    },
    {
      "id_equipo": "11",
      "nombre_equipo": "Sydney Sharks",
      "deporte": "Rugby",
      "id_delegacion": "16",
      "ultima_participacion": [{ "fecha": "2024", "premio": "Campeón Oceanía" }],
      "integrantes": [{ "id_atleta": "11", "nombre": "Michael Hooper", "edad": 33 }]
    },
    {
      "id_equipo": "12",
      "nombre_equipo": "Melbourne Dolphins",
      "deporte": "Natación",
      "id_delegacion": "16",
      "ultima_participacion": [{ "fecha": "2023", "premio": "Oro Mundial de Natación" }],
      "integrantes": [{ "id_atleta": "12", "nombre": "Emma McKeon", "edad": 30 }]
    },
    {
      "id_equipo": "13",
      "nombre_equipo": "London Lions",
      "deporte": "Remo",
      "id_delegacion": "17",
      "ultima_participacion": [{ "fecha": "2024", "premio": "Campeón Europeo de Remo" }],
      "integrantes": [{ "id_atleta": "13", "nombre": "Helen Glover", "edad": 38 }]
    },
    {
      "id_equipo": "14",
      "nombre_equipo": "Manchester Foxes",
      "deporte": "Ciclismo de pista",
      "id_delegacion": "17",
      "ultima_participacion": [{ "fecha": "2023", "premio": "Oro Mundial de Ciclismo" }],
      "integrantes": [{ "id_atleta": "14", "nombre": "Jason Kenny", "edad": 37 }]
}])

db.atletas.insertMany([
    {
        "id_atleta": "01",
        "nombre_atleta": "Coby White",
        "edad": 20,
        "sexo": "Masculino",
        "pais": "Estados Unidos",
        "deporte": "Baloncesto",
        "id_equipo": "01"
      },
      {
        "id_atleta": "02",
        "nombre_atleta": "Naomi Osaka",
        "edad": 27,
        "sexo": "Femenino",
        "pais": "Japón",
        "deporte": "Béisbol",
        "id_equipo": "02"
      },
      {
        "id_atleta": "03",
        "nombre_atleta": "Kylian Mbappé",
        "edad": 26,
        "sexo": "Masculino",
        "pais": "Francia",
        "deporte": "Esgrima",
        "id_equipo": "03"
      },
      {
        "id_atleta": "04",
        "nombre_atleta": "Simone Biles",
        "edad": 28,
        "sexo": "Femenino",
        "pais": "Estados Unidos",
        "deporte": "Gimnasia",
        "id_equipo": "04"
      },
      {
        "id_atleta": "05",
        "nombre_atleta": "Yulimar Rojas",
        "edad": 29,
        "sexo": "Femenino",
        "pais": "Italia",
        "deporte": "Ciclismo",
        "id_equipo": "05"
      },
      {
        "id_atleta": "06",
        "nombre_atleta": "Novak Djokovic",
        "edad": 38,
        "sexo": "Masculino",
        "pais": "Sudáfrica",
        "deporte": "Atletismo",
        "id_equipo": "06"
      },
      {
        "id_atleta": "07",
        "nombre_atleta": "Katie Ledecky",
        "edad": 28,
        "sexo": "Femenino",
        "pais": "Estados Unidos",
        "deporte": "Natación",
        "id_equipo": "07"
      },
      {
        "id_atleta": "08",
        "nombre_atleta": "Eliud Kipchoge",
        "edad": 40,
        "sexo": "Masculino",
        "pais": "Brasil",
        "deporte": "Atletismo",
        "id_equipo": "08"
      },
      {
        "id_atleta": "09",
        "nombre_atleta": "Aitana Bonmatí",
        "edad": 27,
        "sexo": "Femenino",
        "pais": "España",
        "deporte": "Ciclismo",
        "id_equipo": "09"
      },
      {
        "id_atleta": "10",
        "nombre_atleta": "Sunisa Lee",
        "edad": 22,
        "sexo": "Femenino",
        "pais": "México",
        "deporte": "Clavados",
        "id_equipo": "10"
      },
      {
        "id_atleta": "11",
        "nombre_atleta": "Michael Hooper",
        "edad": 33,
        "sexo": "Masculino",
        "pais": "Australia",
        "deporte": "Rugby",
        "id_equipo": "11"
      },
      {
        "id_atleta": "12",
        "nombre_atleta": "Emma McKeon",
        "edad": 30,
        "sexo": "Femenino",
        "pais": "Australia",
        "deporte": "Natación",
        "id_equipo": "12"
      },
      {
        "id_atleta": "13",
        "nombre_atleta": "Helen Glover",
        "edad": 38,
        "sexo": "Femenino",
        "pais": "Reino Unido",
        "deporte": "Remo",
        "id_equipo": "13"
      },
      {
        "id_atleta": "14",
        "nombre_atleta": "Jason Kenny",
        "edad": 37,
        "sexo": "Masculino",
        "pais": "Reino Unido",
        "deporte": "Ciclismo de pista",
        "id_equipo": "14"
      }
])