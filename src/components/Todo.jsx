import complete_stamp from "../kokona_stamp.png";

const Todo = ({ item, toDos, setToDos }) => {
  let divClassName = item.isDone ? "complete" : "not-complete";
  let combinedClassName = `todo-block ${divClassName}`;
  const doneCancelBtnHndlr = (id) => {
    setToDos((prevToDos) => {
      return prevToDos.map((item) => {
        if (item.id === id) {
          return { ...item, isDone: !item.isDone }; // 해당 아이템의 isDone 값을 토글
        }
        return item;
      });
    });
  };
  const deleteBtnHndlr = (id) => {
    const newTodo = toDos.filter((item) => item.id !== id);
    setToDos(newTodo);
    console.log(toDos);
  };
  return (
    <div key={item.id} className={combinedClassName}>
      <h4>{item.title}</h4>
      <img src={complete_stamp} className="complete_stamp complete" />
      <p>{item.content}</p>
      <p>done? {item.isDone.toString()}</p>
      <button onClick={() => deleteBtnHndlr(item.id)}>삭제하기</button>
      <button onClick={() => doneCancelBtnHndlr(item.id)}>
        {item.isDone ? "취소" : "완료"}
      </button>
    </div>
  );
};

export default Todo;
