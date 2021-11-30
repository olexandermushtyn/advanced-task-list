import { List } from '../../../componentns/'
import { TaskSimpleForm, TaskSimpleView } from '../../Task/components'
import { useState } from 'react'
import { Button } from 'antd'
import { useAdvancedViewStyles, useAdvancedViewActions } from '../hooks'
import { useStore } from '../../../contexts/TaskListContext/hooks'

const TaskListAdvancedView = ({ taskList, setTaskList }) => {
  const { wrapper, header, headerBottom } = useAdvancedViewStyles()
  const [showDone, setShowDone] = useState(false)
  const [currentSelectedTask, setCurrentSelectedTask] = useState()
  const { onFreeSpaceClick } = useAdvancedViewActions()
  const { createTask, deleteTask } = useStore()

  const getTasks = () => taskList.tasks.done.length + taskList.tasks.notDone.length

  return taskList ? (
    <div style={{ ...wrapper, height: '80%' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <TaskSimpleForm taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid #42393f' }}>
        <div style={header}>
          <h1 style={{ marginBottom: '0px', color: '#3985f7' }}>{taskList.name}</h1>
          <h1 style={{ color: '#3985f7', marginBottom: '0px' }}>{getTasks()}</h1>
        </div>
        <div style={headerBottom}>
          <div>{taskList.tasks.done.length} done</div>
          <div>
            <Button onClick={() => setShowDone(!showDone)} style={{ paddingRight: '0px' }} size="large" type="link">
              {showDone ? 'Hide' : 'Show'}
            </Button>
          </div>
        </div>
      </div>
      <List
        currentSelectedTask={currentSelectedTask}
        collection={taskList.tasks.notDone}
        setCurrentSelectedTask={setCurrentSelectedTask}
        parent={taskList}
        Item={TaskSimpleView}
      />
      {showDone ? <List collection={taskList.tasks.done} parent={taskList} Item={TaskSimpleView} /> : <></>}
      <div
        onClick={() => onFreeSpaceClick(currentSelectedTask, setCurrentSelectedTask, deleteTask, createTask, taskList)}
        style={{ width: '100%', height: '80%' }}></div>
    </div>
  ) : (
    <Empty></Empty>
  )
}

export default TaskListAdvancedView
