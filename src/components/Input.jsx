import "./Input.css";
//고유 id를 생성하는 함수
let idCounter = 4; //초기 toDos가 3개라서 4부터 시작.
function idMaker() {
  return idCounter++;
}

const Input = ({ title, setTitle, content, setContent, setToDos, toDos }) => {
  const titleChangeHndlr = (event) => {
    setTitle(event.target.value);
  };
  const contentChangeHndlr = (event) => {
    setContent(event.target.value);
  };
  const registerBtnHndlr = function () {
    if (title === "") return;
    const newTodo = { id: idMaker(), title, content, isDone: false };
    setToDos([...toDos, newTodo]);
    setTitle("");
    setContent("");
  };

  return (
    <div className="input-field">
      <label htmlFor="title-input"> 제목 입력</label>
      <input
        value={title}
        onChange={titleChangeHndlr}
        id="title-input"
        maxLength="26"
      />

      <label htmlFor="content-input"> 내용 입력</label>

      <input value={content} onChange={contentChangeHndlr} id="content-input" />

      <button onClick={registerBtnHndlr}>등록하기</button>
    </div>
  );
};

export default Input;
