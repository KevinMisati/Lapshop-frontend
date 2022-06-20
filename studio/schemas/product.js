export default {
  name: 'product',
  type: 'document',
    title: 'Product',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Name'
    },
    {
        name: 'img',
        type: 'string',
        title: 'Image'
    },
    {
        name: 'new_price',
        type: 'number',
        title: 'New Price'
    },
    {
        name: 'old_price',
        type: 'number',
        title: 'Old Price'
    },
    {
        name: 'info',
        type: 'array',
        of: [{type: 'block'}]
    },
    {
        name: 'category',
        type: 'string',
        title: 'Category'
    },
    {
        name: 'topSelling',
        type: 'boolean',
        title: 'Top Selling'
    },

  ]
}