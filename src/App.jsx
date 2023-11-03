import "./App.css";
import { useState } from "react";
import Input from "./components/Input";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [toDos, setToDos] = useState([
    {
      id: 1,
      title: "장보기",
      content: "고기100g, 우유1팩, 당근 2개",
      isDone: true,
    },
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
      <Input toDos={toDos} setToDos={setToDos} />
      <Main toDos={toDos} setToDos={setToDos} />
    </div>
  );
}

export default App;
