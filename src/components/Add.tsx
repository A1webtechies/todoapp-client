import { Container, TextField, Button } from "@material-ui/core";
import { AddCircleOutlineRounded } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../redux/todo/todo.async";

export const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const addTodo = (e: any) => {
    e.preventDefault();
    dispatch(create({ title: input }));
    setInput("");
  };
  return (
    <Container maxWidth="sm">
      <form noValidate onSubmit={addTodo}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="todo"
          label="Enter Todo"
          name="todo"
          autoFocus
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={!input}
          startIcon={<AddCircleOutlineRounded />}
        >
          Add Todo
        </Button>
      </form>
    </Container>
  );
};
