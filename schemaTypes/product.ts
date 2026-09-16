export const product = {
  name: 'product',
  title: 'პროდუქტი',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'დასახელება',
      type: 'string',
    },
    {
      name: 'price',
      title: 'ფასი (ლარი)',
      type: 'number',
    },
    {
      name: 'image',
      title: 'ფოტო',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'აღწერა',
      type: 'text',
    },
  ],
}