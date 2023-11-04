import "./Todo.css";

import complete_stamp from "../images/kokona_stamp.png";

const Todo = ({ item, toDos, setToDos }) => {
  let divClassName = item.isDone ? "complete" : "not-complete";
  let combinedClassName = `toDo__block ${divClassName}`;
  const doneCancelBtnHndlr = (id) => {
    setToDos((prevToDos) => {
      return prevToDos.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone };
        }
        return item;
      });
    });
  };
  const deleteBtnHndlr = (id, done) => {
    if (
      window.confirm(
        done
          ? "삭제할까요?"
          : "정말 삭제할까요? 해야할 일로부터 도망치는건 아니죠?"
      )
    ) {
      const newTodo = toDos.filter((item) => item.id !== id);
      setToDos(newTodo);
    } else {
      return;
    }
  };

  return (
    <div className={combinedClassName}>
      <h4>{item.title}</h4>
      <img src={complete_stamp} className="toDo__complete-stamp complete" />

      <div className="toDo__content-box">
        <p className="toDo__content">{item.content}</p>
      </div>
      <div className="toDo__btn-box">
        {" "}
        <button onClick={() => deleteBtnHndlr(item.id, item.isDone)}>
          삭제하기
        </button>
        <button onClick={() => doneCancelBtnHndlr(item.id)}>
          {item.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
