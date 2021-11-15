const useTaskActions = (
  taskData,
  setTaskData,
  taskList,
  updateTaskList,
  setInputValue
) => {
  const onChangeInput = e => {
    const name = e.currentTarget.value
    setTaskData({ ...taskData, name })
    setInputValue(e.currentTarget.value)
  }

  const onSubmitButtonClick = () => {
    updateTaskList(taskList, taskData)
    setInputValue('')
  }

  return { onChangeInput, onSubmitButtonClick }
}

export default useTaskActions
