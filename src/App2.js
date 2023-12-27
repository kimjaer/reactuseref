import { useState } from "react";


function App() {

  const [member, updatemember] = useState(0);
  const yo = ["월", "화", "수", "목", "금", "토", "일"];
  const [y, yp] = useState("");

  const yoils = () => {
    let yocontent = ""
    for (let i = 0; i < member + 1; i++) {
      yocontent += yo[i] + "요일 ";
    }
    // return yocontent;
    yp(yocontent);
  }

  return (
    <>

      <div id="content" style={{ height: "150vh" }} >
        {y}
      </div>
      <button onClick={() => { updatemember((member + 1) % yo.length); yoils(); }}>클릭</button>
    </>
  );
}

export default App;
