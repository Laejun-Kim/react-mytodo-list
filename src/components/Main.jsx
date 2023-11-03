import Todo from "./Todo";
import "./Main.css";

const Main = ({ toDos, setToDos }) => {
  return (
    <>
      {" "}
      <div className="list-wrapper notfinished">
        <h2>진행중인 TODO!🤔</h2>
        {toDos.map((item) => {
          return (
            <Todo key={item.id} item={item} toDos={toDos} setToDos={setToDos} />
          );
        })}
      </div>
      <div className="list-wrapper finished">
        <h2>완료된 TODO!🥳</h2>
        {toDos.map((item) => {
          return (
            <Todo key={item.id} item={item} toDos={toDos} setToDos={setToDos} />
          );
        })}
      </div>
    </>
  );
};

export default Main;
