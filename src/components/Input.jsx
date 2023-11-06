import "./Input.css";
import { useState } from "react";

//고유 id를 생성하는 함수
let idCounter = 4; //초기 toDos가 3개라서 4부터 시작.
function idMaker() {
  return idCounter++;
}

const Input = ({ setToDos, toDos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const titleChangeHndlr = (event) => {
    setTitle(event.target.value);
  };
  const contentChangeHndlr = (event) => {
    setContent(event.target.value);
  };
  const registerBtnHndlr = function (e) {
    e.preventDefault();

    const newTodo = { id: idMaker(), title, content, isDone: false };
    setToDos([...toDos, newTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <form className="input-field" onSubmit={registerBtnHndlr}>
      <label htmlFor="title-input"> 제목 입력</label>
      <input
        value={title}
        onChange={titleChangeHndlr}
        id="title-input"
        maxLength="26"
        required
        placeholder="제목을 입력하세요(최대26글자)"
      />

      <label htmlFor="content-input"> 내용 입력</label>

      <input
        value={content}
        onChange={contentChangeHndlr}
        id="content-input"
        placeholder="내용을 입력하세요(길이제한 없음)"
      />

      <button type="submit">등록하기</button>
    </form>
  );
};

export default Input;
