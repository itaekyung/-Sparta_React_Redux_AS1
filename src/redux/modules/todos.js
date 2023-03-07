// 액션 타입 생성
const SUBMIT = "todo/todos/add_todo";
const DELETE = "todo/todos/delete_todo";
const MOVE = "todo/todos/move_todo";
const UPDATE = "todo/todos/update_todo";
//액션 크리에이터 생성
export const submitTodo = (payload) => {
  return {
    type: SUBMIT,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE,
    payload,
  };
};

export const moveTodo = (payload) => {
  return {
    type: MOVE,
    payload,
  };
};

export const updateTodo = (id, editTitle, editContent) => {
  return {
    type: UPDATE,
    id,
    editTitle,
    editContent,
  };
};

//초기 상태값
const initialState = [
  {
    id: 1, // id는 모두 고유값이어야 합니다.
    title: "CRUD 기능 구현하기",
    content: "리덕스 흐름 파악하고, 블로그 포스팅하기",
    isDone: false,
  },
  {
    id: 2, // id는 모두 고유값이어야 합니다.
    title: "스타일 컴포넌트",
    content: "너무 어려워요 살려주세요",
    isDone: false,
  },
];

//리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT:
      // const testId = useId(); 컴포넌트에서 생성해서 페이로드로 넘겨주기
      const newTodos = {
        id: Date.now(),
        title: action.payload.title,
        content: action.payload.content,
        isDone: false,
      };
      return [...state, newTodos];
    case DELETE:
      const deleteTodos = state.filter((item) => {
        return item.id !== action.payload.id;
      });
      return deleteTodos;
    case MOVE:
      const moveTodos = state.map((item) => {
        return item.id === action.payload.id
          ? {
              ...item,
              isDone: !item.isDone,
            }
          : item;
      });
      return moveTodos;
    case UPDATE:
      return state.map((item) =>
        item.id === action.id
          ? { ...item, title: action.editTitle, content: action.editContent }
          : item
      );
    default:
      return state;
  }
};

export default todos;
