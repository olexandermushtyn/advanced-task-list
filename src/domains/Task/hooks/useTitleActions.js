const useTitleActions = (
  editedText,
  isEdited,
  setIsEdited,
  item,
  parent,
  updateTask,
  setCurrentSelectedTask
) => {
  const onConfirmButtonClick = event => {
    if (event.keyCode === 13) {
      const name = editedText
      const newItem = { ...item, name }
      setIsEdited(false)
      updateTask(parent, item, newItem)
      setCurrentSelectedTask(undefined)
    }
  }

  const onTaskNameClick = () => {
    setIsEdited(!isEdited)
    setCurrentSelectedTask(item)
  }

  return { onConfirmButtonClick, onTaskNameClick }
}

export default useTitleActions
