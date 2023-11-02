import "./App.css";
import { useState } from "react";
import Todo from "./Todo";
import Input from "./Input";

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

  return (
    <div className="App">
      <Input
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        toDos={toDos}
        setToDos={setToDos}
      />

      <div className="list-wrapper notfinished">
        <h3>진행중!</h3>
        {toDos.map((item) => {
          let divClassName = item.isDone ? "complete" : "not-complete";
          let combinedClassName = `todo-block ${divClassName}`;
          return (
            <Todo
              item={item}
              toDos={toDos}
              setToDos={setToDos}
              combinedClassName={combinedClassName}
            />
          );
        })}
      </div>
      <div className="list-wrapper finished">
        <h3>완료!</h3>
        {toDos.map((item) => {
          let divClassName = item.isDone ? "complete" : "not-complete";
          let combinedClassName = `todo-block ${divClassName}`;
          return (
            <Todo
              item={item}
              toDos={toDos}
              setToDos={setToDos}
              combinedClassName={combinedClassName}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
