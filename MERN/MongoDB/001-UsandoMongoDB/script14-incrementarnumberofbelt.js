db.getCollection("estudiantes").updateMany({home_state: "central"},{$inc:{number_of_belts: 1}})
