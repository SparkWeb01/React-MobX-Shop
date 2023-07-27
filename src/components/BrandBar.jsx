import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Context } from '../index'

const BrandBar = observer(() => {
  const {device} = useContext(Context)
  return (
    <Row  className='d-flex'>
        {device.brands.map(brand=>
            <Col md={2}>
            <Card
            border={brand.id === device.selectedBrand.id? 'primary':'light'}
            onClick={()=> device.setSelectedBrand(brand)}
            style={{cursor:'pointer'}}
            key={brand.id}
            className="p-3"
            >
                {brand.name}
            </Card>
            </Col>
        )}
    </Row>
  )
})

export default BrandBar