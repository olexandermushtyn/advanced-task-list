import createTaskList from './createTaskList'
import updateTaskList from './updateTaskList'

const reducer = (state, action) => {
  const { type, payload } = action
  const actionMap = {
    createTaskList,
    updateTaskList,
  }
  return actionMap[type](state, payload)
}

export default reducer
