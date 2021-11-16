import { List } from '../../../componentns'
import { TaskListSimpleView, TaskListSimpleForm } from '.'
import { useTaskListStyles } from '../hooks'

const { wrapperStyles } = useTaskListStyles

const TaskList = ({ setCurrentList, taskLists, setTaskLists }) => {
  const addTask = task => {
    setTaskLists([...taskLists, task])
  }

  return (
    <div style={wrapperStyles}>
      <div style={{ width: '100%', paddingRight: '15px' }}>
        <h1 style={{ color: '#E4E4DD' }}>Tasks Lists</h1>
        <List collection={taskLists} Item={TaskListSimpleView} setCurrentItem={setCurrentList} />
        <div>
          <TaskListSimpleForm setTaskLists={addTask} />
        </div>
      </div>
    </div>
  )
}

export default TaskList
