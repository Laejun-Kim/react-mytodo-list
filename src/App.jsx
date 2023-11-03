import "./App.css";
import { useState } from "react";
import Todo from "./components/Todo";
import Input from "./components/Input";
import Header from "./components/Header";

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
      <Header />
      <Input
        title={title}
        setTitle={setTitle}
        content={content}
        setContent={setContent}
        toDos={toDos}
        setToDos={setToDos}
      />

      <div className="list-wrapper notfinished">
        <h2>진행중!</h2>
        {toDos.map((item) => {
          return <Todo item={item} toDos={toDos} setToDos={setToDos} />;
        })}
      </div>
      <div className="list-wrapper finished">
        <h2>완료!</h2>
        {toDos.map((item) => {
          return <Todo item={item} toDos={toDos} setToDos={setToDos} />;
        })}
      </div>
    </div>
  );
}

export default App;
