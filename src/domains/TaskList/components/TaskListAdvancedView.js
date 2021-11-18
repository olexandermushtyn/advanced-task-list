import { List } from '../../../componentns/'
import { TaskSimpleForm, TaskSimpleView } from '../../Task/components'
import { useState } from 'react'
import { Button } from 'antd'
import { useAdvancedViewStyles } from '../hooks'

const TaskListAdvancedView = ({ taskList, setTaskList }) => {
  const { wrapper, header, editBlock, editBlockButtons, headerBottom } = useAdvancedViewStyles()

  return taskList ? (
    <div style={wrapper}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <TaskSimpleForm taskList={taskList} setTaskList={setTaskList} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', borderBottom: '1px solid #42393f' }}>
        <div style={header}>
          <h1 style={{ marginBottom: '0px', color: '#3985f7' }}>{taskList.name}</h1>
          <h1 style={{ color: '#3985f7', marginBottom: '0px' }}>{taskList.tasks.length}</h1>
        </div>
        <div style={headerBottom}>
          <div>{taskList.tasks.done.length}</div>
          <div>
            <Button size="large" type="link">
              Show
            </Button>
          </div>
        </div>
      </div>
      <List collection={taskList.tasks.notDone} parent={taskList} Item={TaskSimpleView} />
      <div style={editBlock}>
        <div style={editBlockButtons}></div>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default TaskListAdvancedView
