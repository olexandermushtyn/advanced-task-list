import { List } from 'rc-field-form'

const TaskListBody = ({ taskLists, TaskListSimpleView }) => {
  return taskLists.length !== 0 ? (
    <List collection={taskLists} Item={TaskListSimpleView} />
  ) : (
    <h3>No task lists</h3>
  )
}

export default TaskListBody
