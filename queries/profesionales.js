export const query = `
{
  profesionalCollection {
    items {
      name
      description
      level
      subtitle
      image  {
          url
      }
    }
  }
}
`
