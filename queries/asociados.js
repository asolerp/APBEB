export const query = `
{
  asociadoCollection {
    items {
      name
      description
      category
      image  {
          url
      }
      url
    }
  }
}
`
