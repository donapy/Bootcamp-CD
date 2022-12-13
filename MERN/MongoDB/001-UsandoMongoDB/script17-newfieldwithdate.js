db.getCollection("estudiantes").updateMany({},{$set:{"updated_on": Date()}})
