var toDos = require("../models/todoModel");

module.exports = function(app){

    app.get("/api/setupTodos", function(req,res){

        var startertodos = [
            {
                username:"test",
                todo:"buy more milk",
                isDone:false,
                hasAttachment:false
            },
            {
                username:"test",
                todo:"feed the dog",
                isDone:false,
                hasAttachment:false
            },
            {
                username:"test",
                todo:"learn more node",
                isDone:false,
                hasAttachment:false
            }

        ];

        toDos.create(startertodos,function(err,result){

            res.send(result);

        });

    });
}