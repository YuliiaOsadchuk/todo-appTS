import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ITodo } from "../interfaces";

const BASE_URL = "http://localhost:3000/";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  tagTypes: ["Todos"],
  endpoints: (build) => ({
    getTodo: build.query<ITodo, number>({
      query: (id) => `todos/${id}`,
      providesTags: (result, _, id) => [{ type: "Todos", id }],
    }),
    getTodos: build.query<ITodo[], number>({
      query: (page) => `todos?${page && `_page=${page}`}`,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Todos" as const, id })),
              { type: "Todos", id: "LIST" },
            ]
          : [{ type: "Todos", id: "LIST" }],
    }),
    addTodo: build.mutation<ITodo, Partial<ITodo>>({
      query: (body) => ({
        url: `todos`,
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "Todos", id: "LIST" }],
    }),
    deleteTodo: build.mutation<{ success: boolean; id: number }, number>({
      query(id) {
        return {
          url: `todos/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: (result, _, id) => [{ type: "Todos", id }],
    }),

    updateTodo: build.mutation<void, Pick<ITodo, "id"> & Partial<ITodo>>({
      query: ({ id, ...patch }) => ({
        url: `todos/${id}`,
        method: "PUT",
        body: patch,
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          todosApi.util.updateQueryData("getTodo", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, _, { id }) => [{ type: "Todos", id }],
    }),

    toogleTodo: build.mutation<
      void,
      Pick<ITodo, "id" | "completed"> & Partial<ITodo>
    >({
      query: ({ id, ...patch }) => ({
        url: `todos/${id}`,
        method: "PUT",
        body: { ...patch, completed: !patch.completed },
      }),
      async onQueryStarted({ id, ...patch }, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          todosApi.util.updateQueryData("getTodo", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
      invalidatesTags: (result, _, { id }) => [{ type: "Todos", id }],
    }),
  }),
});

export const {
  useGetTodoQuery,
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useUpdateTodoMutation,
  useToogleTodoMutation,
} = todosApi;
