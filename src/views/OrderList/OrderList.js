import React from 'react'
import './OrderList.css'
import { ReactComponent as Back } from '../../res/images/back.svg'
import { ReactComponent as Edit } from '../../res/images/edit.svg'

function OrderList () {
  return (
    <div className='container'>
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
      <div className='titleText'>
        <div style={{ flexDirection: 'row', display: 'flex' }}>
          <div className='headerText'>
           주문 정보
          </div >
          <div className='edit'>
           <Edit />
           </div>
          </div>
        </div>
      <div className='text-left'>
      매장 명
      </div> 
      <div className='text-right'>
      샐러디 익스프레스 역삼점
      </div> 
      <div className='text-left'>
      주문방식
      </div>
    </div>
  )
}

export default OrderList
