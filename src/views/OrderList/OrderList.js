import React from 'react'
import './OrderList.css'
import { ReactComponent as Back } from '../../res/images/back.svg'
import { ReactComponent as Edit } from '../../res/images/edit.svg'
import { ReactComponent as Minus } from '../../res/images/minus.svg'
import { ReactComponent as Pluse } from '../../res/images/pluse.svg'


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
        <table>
          <tr>
            <th>주문 정보</th>
            <td> </td>
            <td><Edit /></td>
          </tr>
          <tr>
            <td>매장 명</td>
            <td>샐러디 익스프레스 역삼점</td>
          </tr>
          <tr>
            <td>주문방식</td>
            <td>포장 (픽업)</td>
          </tr>
        </table>
        <table>
          <tr>
            <th>시저치킨 샐러디</th>
            <td> </td>
            <td>삭제</td>
          </tr>
          <tr>
            <td>드레싱</td>
            <td>시저 드레싱</td>
          </tr>
          <tr>
            <td>베이스</td>
            <td>채소볼</td>
          </tr>
          <tr>
            <td>베이스 추가</td>
            <td>채소 추가 (기본 제공량의 30% 추가) (+ 1,000 원), 곡물 추가 (기본 제공량의 50% 추가) (+ 1,000 원)</td>
          </tr>
          <tr>
            <td>토핑 추가</td>
            <td>치킨 (+ 1,700 원), 스윗 포테이토 (+ 1,300 원)</td>
          </tr>
          <tr>
            <th>수량</th>
            <td> <Minus /> 1개 <Pluse /> </td>
            <th> 9,000원 </th>
          </tr>
        </table>
        <table>
          <tr>
            <th>탄단지 샐러디</th>
            <td> </td>
            <td>삭제</td>
          </tr>
          <tr>
            <td>드레싱</td>
            <td>시저 드레싱</td>
          </tr>
          <tr>
            <td>베이스</td>
            <td>채소볼</td>
          </tr>
          <tr>
            <td>베이스 추가</td>
            <td>채소 추가 (기본 제공량의 30% 추가) (+ 1,000 원), 곡물 추가 (기본 제공량의 50% 추가) (+ 1,000 원)</td>
          </tr>
          <tr>
            <td>토핑 추가</td>
            <td>치킨 (+ 1,700 원), 스윗 포테이토 (+ 1,300 원)</td>
          </tr>
          <tr>
            <th>수량</th>
            <td> <Minus /> 99개 <Pluse /> </td>
            <th> 999,000원 </th>
          </tr>
        </table>
      
    </div>
  
  )
}

export default OrderList
