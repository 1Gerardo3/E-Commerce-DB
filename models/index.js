const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  onDelete: 'SET NULL',
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  onDelete: 'SET NULL',
  foreignKey: 'category_id'
});

Product.belongsToMany(Tag, {
  onDelete: 'SET NULL',
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'product_id'
})

Tag.belongsToMany(Product, {
  onDelete: 'SET NULL',
  through: {
    model: ProductTag,
    unique: false
  },
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
