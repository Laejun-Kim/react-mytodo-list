import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [isDone, setIsDone] = useState(false); //이게 여기 선언된게 만악의 근원인것 같다

  const [toDos, setToDos] = useState([
    { id: 1, title: "장보기", content: "고기100g, 우유1팩", isDone: true },
    {
      id: 2,
      title: "고양이",
      content: "사료 챙겨주기, 털 빗질",
      isDone: false,
    },
    { id: 3, title: "리액트 공부", content: "과제 시도해보기", isDone: false },
  ]);

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  const doneCancelBtnHndlr = (id) => {
    setToDos((prevToDos) => {
      return prevToDos.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone }; // 해당 아이템의 isDone 값을 토글
        }
        return item;
      });
    });
    console.log(this);
  };
  const registerBtnHndlr = function () {
    const newTodo = { id: toDos.length + 1, title, content, isDone: false };
    setToDos([...toDos, newTodo]);
    console.log(toDos);
  };
  const deleteBtnHndlr = (id) => {
    const newTodo = toDos.filter((item) => item.id !== id);
    setToDos(newTodo);
    console.log(toDos);
  };

  return (
    <div className="App">
      <div className="input-field">
        제목 :&nbsp;
        <input value={title} onChange={titleChangeHandler} />
        <br />
        내용 :&nbsp;
        <input value={content} onChange={contentChangeHandler} />
        <br />
        <button onClick={registerBtnHndlr}>등록하기</button>
      </div>
      <div className="list-wrapper notfinished">
        <h3>진행중!</h3>
        {toDos.map((item) => {
          let divClassName = item.isDone ? "complete" : "not-complete";
          let combinedClassName = `todo-block ${divClassName}`;
          return (
            <div key={item.id} className={combinedClassName}>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p>done? {item.isDone.toString()}</p>
              <button onClick={() => deleteBtnHndlr(item.id)}>삭제하기</button>
              <button onClick={() => doneCancelBtnHndlr(item.id)}>
                {item.isDone ? "취소" : "완료"}
              </button>
            </div>
          );
        })}
      </div>
      <div className="list-wrapper finished">
        <h3>완료!</h3>
        {toDos.map((item) => {
          let divClassName = item.isDone ? "complete" : "not-complete";
          let combinedClassName = `todo-block ${divClassName}`;
          return (
            <div key={item.id} className={combinedClassName}>
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p>done? {item.isDone.toString()}</p>
              <button onClick={() => deleteBtnHndlr(item.id)}>삭제하기</button>
              <button onClick={() => doneCancelBtnHndlr(item.id)}>
                {item.isDone ? "취소" : "완료"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
