export const query = `
{
  noticiaCollection {
    items {
      title
      slug
      subtitle
      textPreview
      iframe
      image  {
          url
      }
      content {
          json
      }
    }
  }
}
`
