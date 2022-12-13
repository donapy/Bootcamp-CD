db.getCollection("estudiantes").find({lucky_number: {$gt:0, $lt: 10}})

