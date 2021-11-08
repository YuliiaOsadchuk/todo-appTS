import reducer, {
  addTodo,
  deleteTodo,
  editTodo,
  toogleTodo,
} from "./todoSlice";

describe("Should handle a todo adding", () => {
  it("to an empty list", () => {
    const givenTodos = {
      todos: [],
    };

    const expected = {
      todos: [
        {
          id: 0,
          title: "Run the tests",
          completed: false,
        },
      ],
    };
    ///

    const result = reducer(
      givenTodos,
      addTodo({
        id: 0,
        title: "Run the tests",
        completed: false,
      })
    );

    expect(result).toEqual(expected);
  });

  it("to an existing list", () => {
    const givenTodos = {
      todos: [
        {
          id: 0,
          title: "Run the tests",
          completed: false,
        },
      ],
    };

    const expected = {
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

    const result = reducer(
      givenTodos,
      addTodo({
        id: 1,
        title: "Use Redux",
        completed: false,
      })
    );

    expect(result).toEqual(expected);
  });
});

it("should handle a todo being delete from an existing list", () => {
  const givenTodos = {
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

  const expected = {
    todos: [
      {
        id: 0,
        title: "Run the tests",
        completed: false,
      },
    ],
  };

  const result = reducer(givenTodos, deleteTodo(idToBeDeleted));

  expect(result).toEqual(expected);
});

it("should handle an editing togo in an existing item", () => {
  const givenTodo = {
    todos: [
      {
        id: 0,
        title: "Run the tests",
        completed: false,
      },
    ],
  };

  const expected = {
    todos: [
      {
        id: 0,
        title: "Use Redux",
        completed: false,
      },
    ],
  };

  const result = reducer(
    givenTodo,
    editTodo({
      id: 0,
      title: "Use Redux",
      completed: false,
    })
  );

  expect(result).toEqual(expected);
});

it("should handle toogle todo in an existing item", () => {
  const givenTodo = {
    todos: [
      {
        id: 0,
        title: "Run the tests",
        completed: false,
      },
    ],
  };

  const expected = {
    todos: [
      {
        id: 0,
        title: "Run the tests",
        completed: true,
      },
    ],
  };

  const idToToogle = 0;

  const result = reducer(givenTodo, toogleTodo(idToToogle));

  expect(result).toEqual(expected);
});
