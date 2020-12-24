export const query = `
{
  noticiaCollection {
    items {
      title
      slug
      subtitle
      text
      image  {
          url
      }
    }
  }
}
`
