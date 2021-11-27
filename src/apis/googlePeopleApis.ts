export const fetchMyEmailAddress = async (authToken: string) => {
  const result = await fetch("https://people.googleapis.com/v1/people/me?personFields=emailAddresses", {
    headers: {
      Authorization: "Bearer " + authToken
    }
  })

  const resultJson = await result.json()
  return resultJson.emailAddresses[0].value
}