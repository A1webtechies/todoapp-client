import React, { useEffect } from "react";
import {
  DeleteOutlineRounded,
  CheckBox,
  CheckBoxOutlineBlank,
} from "@material-ui/icons";
import {
  Container,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Paper,
} from "@material-ui/core";
import { AddTodo } from "../../components/Add";
import { Todo } from "./Todo";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "../../redux/todo/selector";

import { list, remove, update } from "../../redux/todo/todo.async";
import { ITodo } from "../../interfaces";

export const Todos = () => {
  const todos = useSelector(todosSelector);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(list());
  }, []);

  const changeStatus = ({ _id, title, status }: ITodo) => {
    dispatch(update({ id: _id, todo: { status: !status, title } }));
  };

  const deleteTodo = (id: string) => {
    dispatch(remove(id));
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: 30 }}>
      <Paper>
        <AddTodo />
        <List dense={true}>
          {Object?.keys(todos || {}).map((key) => (
            <ListItem key={todos[key]._id}>
              <ListItemText
                primary={todos[key].title}
                secondary={new Date(todos[key].createdAt).toDateString()}
                style={{
                  textDecoration: todos[key].status ? "line-through" : "none",
                }}
              />

              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="Toggle"
                  onClick={() => changeStatus(todos[key])}
                >
                  {todos[key].status ? (
                    <CheckBox color="primary" />
                  ) : (
                    <CheckBoxOutlineBlank />
                  )}
                </IconButton>

                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => deleteTodo(todos[key]._id)}
                >
                  <DeleteOutlineRounded />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Todo />
    </Container>
  );
};
