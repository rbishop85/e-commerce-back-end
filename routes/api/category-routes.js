const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products

  // Category.findAll();
  // const categories = await Category.findAll();

  // .then res.json(data) to return the data
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products

  // Category.findByPk(req.params.id)
});

router.post('/', (req, res) => {
  // create a new category

  // Category.create(req.body)
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value

  /**
   * Category.update( req.body, {
   * where: {id: req.params.id}
   * }) 
   * */ 
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value

  // Category.destroy( where: id: req.params.id)
});

module.exports = router;
