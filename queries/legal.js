export const query = `
{
  legalCollection(where: { title: "legal"}) {
    items {
      title
      content {
          json
      }
    }
  }
}
`
