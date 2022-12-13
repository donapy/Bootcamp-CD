db.getCollection("estudiantes").update({"_id" : ObjectId("6397d1089851ac1c63b2c377")},{$pop:{intereses: 1}})
