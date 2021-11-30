import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const SearchInput = styled(Input)`
  background: #5a5356;
  color: #fff;
  margin-bottom: 20px;
  border-radius: 10px;
  border: none;
  border-color: #5a5356;
  --webkit-tap-highlight-color: transparent;
  &:focus {
    border: none;
    outline: none;
    box-shadow: none;
    background: #5a5356;
    border-color: #5a5356 !important;
    outline: none;
  }
  &:hover {
    border-color: #5a5356;
    background: #5a5356;
    outline: none;
  }
  &:active {
    background: #5a5356;
    border: none;
    border-color: #5a5356;
    outline: none;
  }
  input {
    background-color: #5a5356;
    color: #fff;
  }
`

export default SearchInput
