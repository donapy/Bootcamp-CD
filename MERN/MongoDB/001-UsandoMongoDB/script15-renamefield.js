db.getCollection("estudiantes").updateMany({},{$rename: {"number_of_belts": "belts_earned"}})
