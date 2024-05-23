import logo from "./logo.svg";
import "./App.css";
import { deleteTodos, getOneTodos, getTodos, postTodos, putTodos } from "./apis/todos";
import { deleteUser, getUser, getUsers, postUser, putUser } from "./apis/users";

function App() {
  return (
    <div className="App">
      <div>
        <button
          onClick={() => {
            getUsers();
          }}
        >
          사용자 전체 목록 get
        </button>
        <button
          onClick={() => {
            getUser("2");
          }}
        >
          사용자 한명 get
        </button>
        <button
          onClick={() => {
            postUser({ id: "3", name: "홍길동", role: "개발자" });
          }}
        >
          사용자 등록 post
        </button>
        <button
          onClick={() => {
            putUser({ id: "3", name: "김길동", role: "리액트 개발자" });
          }}
        >
          사용자 수정 put
        </button>
        <button
          onClick={() => {
            deleteUser("3");
          }}
        >
          사용자 삭제 delete
        </button>
      </div>

      <div>
        <button
          onClick={() => {
            getTodos();
          }}
        >
          읽기
        </button>
        <button
          onClick={() => {
            getOneTodos(2);
          }}
        >
          하나만 읽기
        </button>
        <button
          onClick={() => {
            const gogo = { id: 50, content: "새할일", completed: false };
            postTodos(gogo);
          }}
        >
          쓰기
        </button>
        <button
          onClick={() => {
            deleteTodos(50);
          }}
        >
          삭제
        </button>
        <button
          onClick={() => {
            putTodos({ id: 30, content: "수정이지요" });
          }}
        >
          수정
        </button>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
