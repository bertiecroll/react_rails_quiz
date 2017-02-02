export const loadState = function() {
  try {
    const stateString = localStorage.getItem('state')
    if (stateString === null) {
      return undefined
    }
    return JSON.parse(stateString)
  } catch (err) {
    console.log(err)
    return undefined
  }
}

export const saveState = function(state) {
  try {
    const stateString = JSON.stringify(state)
    localStorage.setItem('state', stateString)
  } catch (err) {
    console.log(err)
  }
}