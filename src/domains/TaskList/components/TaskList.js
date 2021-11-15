import { List } from '../../../componentns'
import { TaskListSimpleView, TaskListSimpleForm } from '.'

const styles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginLeft: '10px',
  padding: '10px',
  height: '100%',
}

const TaskList = ({ setCurrentList, taskLists, setTaskLists }) => {
  const addTask = task => {
    setTaskLists([...taskLists, task])
  }

  return (
    <div style={styles}>
      <div style={{ width: '100%', paddingRight: '15px' }}>
        <h1 style={{ color: 'white' }}>Tasks Lists</h1>
        <List
          collection={taskLists}
          Item={TaskListSimpleView}
          setCurrentItem={setCurrentList}
        />
        <div>
          <TaskListSimpleForm setTaskLists={addTask} />
        </div>
      </div>
    </div>
  )
}

export default TaskList
