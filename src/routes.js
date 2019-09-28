const routes = require('express').Router();
const Dog = require('./models/dog.js');

routes.get('/', async(req, res)=>{
  const dogs = await Dog.scan().exec();
  return res.json({dogs});
});

routes.get('/:id', async(req, res)=>{
  const dog = await Dog.get(req.params.id);
  return res.json(dog);
});

routes.post('/', async(req, res)=>{
  const dog = await Dog.create(req.body);
  return res.json(dog);
});

routes.put('/:id', async(req, res)=>{
  const dog = await Dog.update(req.params.id,req.body);
  return res.json(dog);
});

routes.delete('/:id', async(req, res)=>{
  await Dog.delete(req.params.id);
  return res.json({msg: 'Deleted'});
});

module.exports = routes;
