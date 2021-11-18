const useSimpleViewStyles = () => {
  const wrapperStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 10px',
    color: '#ededed',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    fontWeight: 'semi-bold',
  }

  const titleStyles = {
    window: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }

  return { wrapperStyles, titleStyles }
}

export default useSimpleViewStyles
