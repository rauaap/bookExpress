/*
All of our routes have 4 methods
GET which gets all members of the model or one by id
POST which adds a member using request body for data
DELETE which deletes by id
and PUT which updates by id
only difference is the model
so I implemented a router factory that creates these routes based on the model
*/

const routerFactory = (model) => {
    const router = require('express').Router();

    //A function that returns a callback function for the
    //database driver. All driver methods use an identical
    //callback function but we need to tie the response to it which
    //we do by wrapping the callback function with another function.
    //The response is given as an argument to the wrapper and it returns
    //the callback function using that response.
    const simpleResponse = (response) => {
        return (err, dbResult) => {
            if (err) {
              response.json(err);
            } else {
              response.json(dbResult);
            }
          }
      }

    router.get('/:id?', (request, response) => {
        if (request.params.id) {
          model.getById(request.params.id, simpleResponse(response));
        }
        else {
          model.getAll(simpleResponse(response));
        }
    })

    router.post('/', (request, response) =>
        model.add(
            request.body,
            simpleResponse(response)
        )
    )

    router.delete('/:id', (request, response) =>
        model.delete(
            request.params.id,
            simpleResponse(response)
        )
    )

    router.put('/:id', (request, response) =>
        model.update(
            request.params.id,
            request.body,
            simpleResponse(response)
        )
    )

    return router
}

module.exports = routerFactory
