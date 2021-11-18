const useSimpleViewActions = (editedText, item, updateTaskList, setCurrentItem) => {
  const onConfirmButtonClick = event => {
    if (event.keyCode === 13) {
      const name = editedText
      const itemCopy = { ...item, name }
      console.log(itemCopy)
      updateTaskList(item, itemCopy)
      setCurrentItem(itemCopy)
    }
  }

  return { onConfirmButtonClick }
}

export default useSimpleViewActions
