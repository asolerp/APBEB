export const query = `
{
  legalCollection(where: { title: "privacidad"}) {
    items {
      title
      content {
          json
      }
    }
  }
}
`
