import fetch from 'isomorphic-fetch'

const BUZZLER_BACKEND_URL = '/api/graphql'

const dataMutation = async (query) => {
  const response = await fetch(`${BUZZLER_BACKEND_URL}?query=${query}`, {
    method: 'POST'
  })
  const { data } = await response.json()
  return { ...data }
}

export default dataMutation
