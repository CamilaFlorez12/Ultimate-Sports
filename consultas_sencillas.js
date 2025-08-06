//Busqueda de un deporte en especifico
db.equipos.find({deporte:"Baloncesto"})

//consultar atletas de cierto pais
db.atletas.find({pais:"Estados Unidos"})

//mostra deportistas de sexo femenino
db.atletas.find({sexo:"Femenino"})

//mostrar fecha de ultima participacion de un equipo
db.equipos.find({"ultima_participacion.fecha":"1998"})

//mostrar premios ganados (serie mundial)
db.equipos.find({"ultima_participacion.premio":"Serie Mundial"})