//atletas con edades entre 20 y 25 años
db.atletas.find({edad:{$gte:20, $lte:25}})

//delegaciones que han ganado mas de tres medallas de oro
db.delegaciones.find({"medallas_gandas.oro":{$gte:3}})

//equipos con su ultima fecha de participación mayores a 2000
db.equipos.find({"ultima_participacion.fecha":{$gte:"2000"}})

//delegacioes con equipos 
db.delegaciones.find({equipos:{$in:["04","10"]}})

//delegaciones con medallas de bronce iguales a 3
db.delegaciones.find({"medallas_gandas.bronce":{$eq:3}})

//equipos con su ultima fecha de participación menosres al 2000
db.equipos.find({"ultima_participacion.fecha":{$lt:"2000"}})

//delegacione que tienen 3 equipos registrados
db.delegaciones.find({equipos:{$size:3}})

//delegaciones que tienen cantidad de medallas de oro par
db.delegaciones.find({"medallas_gandas.oro":{$mod:[2,0]}})

//atletas que no sean hombres
db.atletas.find({sexo:{$ne:"Masculino"}})

//atletas con edades mayores a 18 o que sean de Japón
db.atletas.find({$or:[{edad:{gt:18}},{pais:"Japón"}]})