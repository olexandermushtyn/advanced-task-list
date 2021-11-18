import { List } from 'rc-field-form'

const TaskListBody = ({ taskLists, TaskListSimpleView }) => {
  return taskLists.length !== 0 ? (
    <List collection={taskLists} Item={TaskListSimpleView} />
  ) : (
    <h5>No task lists</h5>
  )
}

export default TaskListBody
