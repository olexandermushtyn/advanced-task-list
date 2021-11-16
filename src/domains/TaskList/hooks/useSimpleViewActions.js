const useSimpleViewActions = (editedText, item, updateTaskList, setIsEdited, setCurrentItem) => {
  const onConfirmButtonClick = () => {
    const name = editedText
    const itemCopy = { ...item, name }
    console.log(itemCopy)
    updateTaskList(item, itemCopy)
    setIsEdited(false)
    setCurrentItem(itemCopy)
  }

  return { onConfirmButtonClick }
}

export default useSimpleViewActions
