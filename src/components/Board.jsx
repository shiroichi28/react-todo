const Board = ({ task, index, taskList, setTaskList }) => {
  const handleDelete = () => {
    let removeIndex = taskList.indexOf(task);
    taskList.splice(removeIndex, 1);
    setTaskList((currentTask) =>
      currentTask.filter((todo) => index === removeIndex)
    );
  };
  return (
    <>
      <div className="border flex flex-col items-center justify-center  max-w-lg rounded-xl text-center text-lg px-4 pb-4 mt-5 md:px-20">
        <p>{task}</p>
        <button
          className="bg-red-500 text-white rounded-lg py-1 px-2 mt-4"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </>
  );
};
export default Board;
