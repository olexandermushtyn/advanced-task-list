import nextId from 'react-id-generator'

const useTaskActions = (taskData, setTaskData, taskList, updateTaskList, setInputValue) => {
  const onChangeInput = e => {
    const id = nextId()
    const name = e.currentTarget.value
    setTaskData({ ...taskData, name, id })
    setInputValue(e.currentTarget.value)
  }

  const onSubmitButtonClick = () => {
    updateTaskList(taskList, taskData)
    setInputValue('')
  }

  return { onChangeInput, onSubmitButtonClick }
}

export default useTaskActions
