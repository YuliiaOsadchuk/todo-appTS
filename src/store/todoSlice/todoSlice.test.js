import reducer, {
  addTodo,
  deleteTodo,
  editTodo,
  toogleTodo,
} from "./todoSlice";

test("should handle a todo being added to an empty list", () => {
  const previousState = {
    todos: [],
  };

  expect(
    reducer(
      previousState,
      addTodo({
        id: 0,
        title: "Run the tests",
        completed: false,
      })
    )
  ).toEqual({
    todos: [
      {
        id: 0,
        title: "Run the tests",
        completed: false,
      },
    ],
  });
});

test("should handle a todo being added to an existing list", () => {
  const previousState = {
    todos: [
      {
        id: 0,
        title: "Run the tests",
        completed: false,
      },
    ],
  };

  expect(
    reducer(
      previousState,
      addTodo({
        id: 1,
        title: "Use Redux",
        completed: false,
      })
    )
  ).toEqual({
    todos: [
      {
        id: 0,
        title: "Run the tests",
        completed: false,
      },
      {
        id: 1,
        title: "Use Redux",
        completed: false,
      },
    ],
  });
});

test("should handle a todo being delete from an existing list", () => {
  const previousState = {
    todos: [
      {
        id: 0,
        title: "Run the tests",
        completed: false,
      },
      {
        id: 1,
        title: "Use Redux",
        completed: false,
      },
    ],
  };

  const idToBeDeleted = 1;

  expect(reducer(previousState, deleteTodo(idToBeDeleted))).toEqual({
    todos: [
      {
        id: 0,
        title: "Run the tests",
        completed: false,
      },
    ],
  });
});

test("should handle a todo being added to an existing list", () => {
  const previousState = {
    todos: [
      {
        id: 0,
        title: "Run the tests",
        completed: false,
      },
    ],
  };

  expect(
    reducer(
      previousState,
      editTodo({
        id: 0,
        title: "Use Redux",
        completed: false,
      })
    )
  ).toEqual({
    todos: [
      {
        id: 0,
        title: "Use Redux",
        completed: false,
      },
    ],
  });
});

test("should handle a todo being added to an existing list", () => {
  const previousState = {
    todos: [
      {
        id: 0,
        title: "Run the tests",
        completed: false,
      },
    ],
  };

  const idToToogle = 0;

  expect(reducer(previousState, toogleTodo(idToToogle))).toEqual({
    todos: [
      {
        id: 0,
        title: "Run the tests",
        completed: true,
      },
    ],
  });
});
