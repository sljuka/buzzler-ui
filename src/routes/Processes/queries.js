export const processesQuery = (processNames) => {
  let queryParams = ''
  if (processNames && processNames.length > 0) {
    const stringArray = processNames.map(name => `"${name}"`).join(',')
    queryParams = `(names: [${stringArray}])`
  }
  return (
`
{
  processes${queryParams} {
    id
    name
    description
    instances {
      id
      name
      additionalInfo
    }
  }
}
`
  )
}

export const searchProcessesQuery = (searchValue) => {
  let searchPatternParam = ''
  if (searchValue) {
    searchPatternParam = `(searchPattern: "${searchValue}")`
  }
  return (
`
{
  processes${searchPatternParam} {
    id
    name
    description
    instances {
      id
      name
      additionalInfo
    }
  }
}
`
  )
}

export const addProcessInstanceMutation = (processId, userId, additionalInfo = '') => {
  return (
`
mutation {
  addProcessInstance(processId: ${processId}, userId: ${userId}, additionalInfo: "${additionalInfo}") {
    id
  }
}
`
  )
}
