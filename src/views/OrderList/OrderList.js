import React from 'react'
import './OrderList.css'
import { ReactComponent as Back } from '../../res/images/back.svg'

function OrderList () {
  return (
    <div className='header'>
      <div style={{ flexDirection: 'row', display: 'flex' }}>
        <Back />
        <div className='headerText'>
          장바구니
        </div>
      </div>
      <div className='headerText'>
        비우기
      </div>
    </div>
  )
}

export default OrderList
