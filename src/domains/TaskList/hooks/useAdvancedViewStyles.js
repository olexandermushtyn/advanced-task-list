const useAdvancedViewStyles = () => {
  const wrapper = {
    display: 'flex 1',
    padding: '20px 20px',
  }
  const header = {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#3985f7',
    fontSize: '28px',
  }

  const editBlock = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingRight: '5px',
  }

  const headerBottom = {
    display: 'flex',
    justifyContent: 'space-between',
    color: '#dfddde',
    fontSize: '18px',
  }

  const editBlockButtons = { display: 'flex', alignItems: 'center' }

  return { wrapper, header, editBlock, editBlockButtons, headerBottom }
}

export default useAdvancedViewStyles
