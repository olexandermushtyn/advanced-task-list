import React from 'react'
import { Row, Col } from 'antd'
import { DefaultListAllItem, DefaultListPlannedItem, DefaultListTodayItem, DefaultListWithFlagItem } from '.'

const DefaultLists = () => {
  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col gutter={16} span="12">
          <DefaultListTodayItem />
          <DefaultListAllItem />
        </Col>
        <Col span="12">
          <DefaultListPlannedItem />
          <DefaultListWithFlagItem />
        </Col>
      </Row>
      <Row></Row>
    </div>
  )
}

export default DefaultLists
