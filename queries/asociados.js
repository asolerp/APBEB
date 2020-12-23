export const query = `
{
  asociadoCollection {
    items {
      name
      description
      image  {
          url
      }
    }
  }
}
`
