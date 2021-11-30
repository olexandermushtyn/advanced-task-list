const itemStyles = { display: 'flex', flexDirection: 'column', minWidth: '100%' }

const List = ({
  collection,
  Item,
  setCurrentItem,
  parent,
  setCurrentSelectedTask,
  currentSelectedTask,
  currentList,
  taskList,
  setTaskList,
}) => {
  console.log(collection)
  return collection?.length !== 0 ? (
    <div style={itemStyles}>
      {collection.map((item, index) => (
        <Item
          taskList={taskList}
          setTaskList={setTaskList}
          currentSelectedTask={currentSelectedTask}
          setCurrentSelectedTask={setCurrentSelectedTask}
          key={index}
          item={item}
          parent={parent}
          setCurrentItem={setCurrentItem}
          currentList={currentList}
        />
      ))}
    </div>
  ) : (
    <></>
  )
}

export default List
