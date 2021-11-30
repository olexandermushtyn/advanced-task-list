import styled from 'styled-components'
import { useRef, useEffect } from 'react'

const TransparentInput = styled.input`
  background-color: transparent;
  border: none;
  color: #dfddde;
  --webkit-tap-highlight-color: transparent;
  &:focus {
    border: none;
    outline: none;
  }
`

const TaskEditForm = ({ onEnterPress, editedText, setEditedText }) => {
  const inputRef = useRef()

  useEffect(() => inputRef.current.focus(), [])

  return (
    <TransparentInput
      ref={inputRef}
      onKeyUp={onEnterPress}
      onChange={e => setEditedText(e.currentTarget.value)}
      value={editedText}
    />
  )
}

export default TaskEditForm
