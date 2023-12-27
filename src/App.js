import { useState } from "react";


function App() {

  const [member, updatemember] = useState(0);
  const yo = ["월", "화", "수", "목", "금", "토", "일"];
  const yoClick = () => {
    // 버튼을 클릭할때 마다 useState변수 member값을 변경하므로
    // 다시 이 함수를 실행하게 됨
    if (member < yo.length - 1) {
      //member가 7 (최대값)보다 작은 동안에는
      updatemember(member + 1); // member 가 1이됨
      //member값을 변경해서 랜더링실행
      document.querySelector("#content").innerHTML += `${yo[member + 1]}요일`;
      //랜더링하고 실행되는 것이 아니라서... useEffect가 이래서 필요한거 구나~
      //
    } else {
      updatemember(0); // member 가 0이 됨
      document.querySelector("#content").innerHTML = `${yo[0]}요일`;
    }
  };

  return (
    <>
      {/* return안의 식을 저장하라이므로 안의 대입식을 쓰면 안됨 
          외부컴포넌트가 이 식을 받아서 저장해야하므로 이 안의 대입식이 필요하지않다! 
          대입은 저장하다와 같다.!!!!
       문제 ) 월요일 화요일 수요일 ... 클릭할때마다 늘어나기
       
      */}
      <div id="content" >
        {yo[member]}요일
      </div>
      <button onClick={yoClick}>클릭</button>
    </>
  );
}

export default App;
