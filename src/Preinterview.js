import { useRef, useState } from "react";
import React from 'react'

const Preinterview = () => {
  const faq = useRef(null);
  const [shownum, numupdate] = useState(null);
  const precont = [
    {
      h3: "비전공자로써 프론트앤드 훈련에서 가장 어려웠던 것은?",
      div: " 변수 선언부터 함수선언/실행 같은 개념이 너무 생소했다.자바스크립트가 완전하지 않은 상태에서 /리액트를 들어가니 출발점을 잡기 너무 어려웠다"
    },
    {
      h3: "비전공자로써 프론트앤드 훈련에서 가장 어려웠던 것은?",
      div: " 변수 선언부터 함수선언/실행 같은 개념이 너무 생소했다.자바스크립트가 완전하지 않은 상태에서 /리액트를 들어가니 출발점을 잡기 너무 어려웠다"
    },
    {
      h3: "비전공자로써 프론트앤드 훈련에서 가장 어려웠던 것은?",
      div: " 변수 선언부터 함수선언/실행 같은 개념이 너무 생소했다.자바스크립트가 완전하지 않은 상태에서 /리액트를 들어가니 출발점을 잡기 너무 어려웠다"
    },
    {
      h3: "비전공자로써 프론트앤드 훈련에서 가장 어려웠던 것은?",
      div: " 변수 선언부터 함수선언/실행 같은 개념이 너무 생소했다.자바스크립트가 완전하지 않은 상태에서 /리액트를 들어가니 출발점을 잡기 너무 어려웠다"
    },
  ]
  //문자.split('구분기호') -> array타입으로 전환 
  //(문자를 정렬데이터로 변환하는 아주 중요한 메서드)
  return (
    <section ref={faq}>
      <h2>면접전에 봐주세요.</h2>
      <ul>
        {
          precont.map((e, i) => {
            return (
              <li key={i}>
                클릭한 h3의 {i}값을 shownum으로 변경
                <h3 onClick={()=>{numupdate(i)}}>{e.h3}</h3>

                {shownum === i && <div>{
                  e.div.split('/').map((e, i) => {
                    return (
                      <React.Fragment key={i}>
                        {e}
                        <br />
                      </React.Fragment>
                    )
                  })
                }</div>
                }
              </li>
            );
          })
        }
      </ul>
    </section>
  )
}

export default Preinterview;