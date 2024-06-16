import { useReducer } from 'react'

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할
function reducer(state, action) {
  console.log(state, action)
  //   if (action.type === 'INCREASE') {
  //     return state + action.data
  //   }

  //   if (action.type === 'DECREASE') {
  //     return state - action.data
  //   }
  switch (action.type) {
    case 'INCREASE':
      return state + action.data
    case 'DECREASE':
      return state - action.data
  }
}

const Exam = () => {
  // dispatch : 발송하다, 급송하다
  // 상태 변화가 있어야 한다는 사실을 알리는 ,발송하는 함수
  // 두번쨰 인수 state의 초깃값
  const [state, dispatch] = useReducer(reducer, 0)

  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    // 디스패치에게 요청하는 액션객체 , 디스패치는 또 리듀서 함수에 전달
    dispatch({
      type: 'INCREASE',
      data: 1,
    })
  }

  const onClickMinus = () => {
    dispatch({
      type: 'DECREASE',
      data: 1,
    })
  }

  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  )
}

export default Exam
