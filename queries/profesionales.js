export const query = `
{
  profesionalCollection {
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
