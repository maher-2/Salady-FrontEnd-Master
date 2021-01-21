import React from 'react'
import './OrderList.css'
import { ReactComponent as Back } from '../../res/images/back.svg'
import { ReactComponent as Edit } from '../../res/images/edit.svg'
import { ReactComponent as Minus } from '../../res/images/minus.svg'
import { ReactComponent as Pluse } from '../../res/images/pluse.svg'
import { ReactComponent as NextPage } from '../../res/images/nextPage.svg'
import { ReactComponent as VLine } from '../../res/images/vLine.svg'

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
        <div className='price'>
          비우기
        </div>
      </div>
      <div className='table'>
        <div className='trow'>
          <div className='theader'>주문 정보</div>
          <div className='tcol'> </div>
          <div className='tcol'><Edit /></div>
        </div>
        <div className='trow'>
          <div className='tcol'>매장 명</div>
          <div className='tcol'>샐러디 익스프레스 역삼점</div>
        </div>
        <div className='trow'>
          <div className='tcol'>주문방식</div>
          <div className='tcol'>포장 (픽업)</div>
        </div>
      </div>
      <div className='table'>
        <div className='trow'>
          <div className='theader-sub'>시저치킨 샐러디</div>
          <div className='tcol'> </div>
          <div className='tcol'>삭제</div>
        </div>
        <div className='trow'>
          <div className='tcol'>드레싱</div>
          <div className='tcol'>시저 드레싱</div>
        </div>
        <div className='trow'>
          <div className='tcol'>베이스</div>
          <div className='tcol'>채소볼</div>
        </div>
        <div className='trow'>
          <div className='tcol'>베이스 추가</div>
          <div className='tcol'>채소 추가 (기본 제공량의 30% 추가) (+ 1,000 원), 곡물 추가 (기본 제공량의 50% 추가) (+ 1,000 원)</div>
        </div>
        <div className='trow'>
          <div className='tcol'>토핑 추가</div>
          <div className='tcol'>치킨 (+ 1,700 원), 스윗 포테이토 (+ 1,300 원)</div>
        </div>
        <div className='trow'>
          <div className='priceText'>수량</div>
          <div className='tcol' style={{ borderColor: '#E9E7E7', borderRadius: 10, borderWidth: 1, borderStyle: 'solid' }}> <Minus className='sign' /> 1개 <Pluse className='sign' /> </div>
          <div className='price'> 9,000원 </div>
        </div>
      </div>
      <div className='table'>
        <div className='trow'>
          <div className='theader-sub'>탄단지 샐러디</div>
          <div className='tcol'> </div>
          <div className='tcol'>삭제</div>
        </div>
        <div className='trow'>
          <div className='tcol'>드레싱</div>
          <div className='tcol'>시저 드레싱</div>
        </div>
        <div className='trow'>
          <div className='tcol'>베이스</div>
          <div className='tcol'>채소볼</div>
        </div>
        <div className='trow'>
          <div className='tcol'>베이스 추가</div>
          <div className='tcol'>채소 추가 (기본 제공량의 30% 추가) (+ 1,000 원), 곡물 추가 (기본 제공량의 50% 추가) (+ 1,000 원)</div>
        </div>
        <div className='trow'>
          <div className='tcol'>토핑 추가</div>
          <div className='tcol'>치킨 (+ 1,700 원), 스윗 포테이토 (+ 1,300 원)</div>
        </div>
        <div className='trow'>
          <div className='priceText'>수량</div>
          <div className='tcol'style={{ borderColor: '#E9E7E7', borderRadius: 10, borderWidth: 1, borderStyle: 'solid' }}> <Minus className='sign' /> 99개 <Pluse className='sign' /> </div>
          <div className='price'> 999,000원 </div>
        </div>
      </div>
      <div className='footer'>
        <div className='footerText'>결제하기</div>
        <div className='fcol'>  3개 <VLine className='sign' /> </div>
        <div className='footerPrice'> 1,008,000원 <NextPage className='fsign' /> </div>
      </div>
    </div>

  )
}

export default OrderList
