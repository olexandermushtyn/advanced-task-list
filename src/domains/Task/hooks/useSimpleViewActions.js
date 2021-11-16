const useSimpleViewActions = (checked, setChecked, updateTask, parent, item, setEditedText) => {
  const onCheckedChange = () => {
    setChecked(!checked)
    const newTask = { ...item }
    newTask.done = !checked
    updateTask(parent, item, newTask)
  }

  const onInputTextChange = e => {
    setEditedText(e.currentTarget.value)
  }

  return { onCheckedChange, onInputTextChange }
}

export default useSimpleViewActions
