db.getCollection("estudiantes").updateMany({},{ $unset: { lucky_number: ""} }
)
