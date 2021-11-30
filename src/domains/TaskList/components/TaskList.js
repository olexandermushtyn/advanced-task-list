import { List } from '../../../componentns'
import { TaskListSimpleView, TaskListSimpleForm } from '.'
import { useTaskListStyles } from '../hooks'
import { useRef } from 'react'

const TaskList = ({ setCurrentList, taskLists, setTaskLists, currentList }) => {
  const addTask = task => {
    setTaskLists([...taskLists, task])
  }

  const { wrapperStyles } = useTaskListStyles()

  return (
    <div style={wrapperStyles}>
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100%',
        }}>
        <div>
          <h4 style={{ color: '#8d878a', marginLeft: '10px', marginTop: '10px', marginBottom: '0px' }}>
            My tasks Lists
          </h4>
          <List
            collection={taskLists}
            currentList={currentList}
            Item={TaskListSimpleView}
            setCurrentItem={setCurrentList}
          />
        </div>
        <div>
          <TaskListSimpleForm setTaskLists={addTask} />
        </div>
      </div>
    </div>
  )
}

export default TaskList
