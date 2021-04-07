export const query = `
{
  legalCollection(where: { title: "cookies"}) {
    items {
      title
      content {
          json
      }
    }
  }
}
`
