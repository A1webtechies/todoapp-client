import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";

export const Todo: React.FC = () => {
  const editTodo = () => {};
  const [update, setUpdate] = useState("");
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogContent>
        <TextField
          autoFocus
          margin="normal"
          label="Update Todo"
          type="text"
          fullWidth
          name="updateTodo"
          value={update}
          onChange={(event) => setUpdate(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)} color="primary">
          Cancel
        </Button>
        <Button onClick={editTodo} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};
