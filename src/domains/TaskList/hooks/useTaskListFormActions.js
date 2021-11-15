import nextId from 'react-id-generator'
import { message } from 'antd'

const useTaskListFormActions = (
  taskListData,
  setTaskListData,
  setTaskLists,
  setInputValue
) => {
  const onInputChange = e => {
    const name = e.currentTarget.value
    setInputValue(e.currentTarget.value)
    setTaskListData({ ...taskListData, name })
  }

  const onApplyButtonClick = () => {
    setTaskLists(taskListData)
    setTaskListData({
      id: nextId(),
      name: '',
      tasks: [],
    })
    setInputValue('')
    message.success('Task list added')
  }
  return { onInputChange, onApplyButtonClick }
}

export default useTaskListFormActions
