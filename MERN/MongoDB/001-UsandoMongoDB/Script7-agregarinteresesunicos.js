db.getCollection("estudiantes").update({"_id" : ObjectId("6397d1089851ac1c63b2c377")},{$push:{intereses: 'Javascript'}})
db.getCollection("estudiantes").update({"_id" : ObjectId("6397d1229851ac1c63b2c378")},{$push:{intereses: 'React'}})
db.getCollection("estudiantes").update({"_id" : ObjectId("6397d1359851ac1c63b2c379")},{$push:{intereses: 'Express'}})