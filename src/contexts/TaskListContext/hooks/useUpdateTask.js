const useUpdateTask = (store, dispatch) => {
  const updateTask = (taskList, task, newTask) => {
    const collection = task.done ? 'done' : 'notDone'
    const newCollection = newTask.done ? 'done' : 'notDone'
    const taskListIndex = store.indexOf(taskList)
    const taskIndex = taskList.tasks[collection].indexOf(task)
    const storeCopy = [...store]
    console.log(newTask.name)
    console.log(newTask.name.replace(''))
    if (newTask.name.replace(/\s+/g, '') === '') {
      storeCopy[taskListIndex].tasks[collection] = storeCopy[taskListIndex].tasks[collection].filter(
        item => item !== task
      )
    } else {
      if (newTask.done !== task.done) {
        storeCopy[taskListIndex].tasks[collection] = storeCopy[taskListIndex].tasks[collection].filter(
          item => item !== task
        )
        storeCopy[taskListIndex].tasks[newCollection].push(newTask)
      } else storeCopy[taskListIndex].tasks[collection][taskIndex] = newTask
    }
    dispatch({
      type: 'updateTaskList',
      payload: storeCopy,
    })
  }
  return updateTask
}

export default useUpdateTask
