import { UnorderedListOutlined } from '@ant-design/icons'

const styles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: '1px solid white',
  padding: '5px',
  color: 'white',
  margin: '10px 0px',
  cursor: 'pointer',
  borderRadius: '5px',
}

const TaskListSimpleView = ({ item, setCurrentItem }) => {
  return (
    <div style={styles} onClick={() => setCurrentItem(item)}>
      <div>
        <UnorderedListOutlined color="white" />
      </div>
      <div style={{ color: 'white', marginLeft: '5px' }}>{item.name}</div>
      <div style={{ color: 'whitesmoke', marginLeft: '15px' }}>
        {item.tasks?.length}
      </div>
    </div>
  )
}

export default TaskListSimpleView
