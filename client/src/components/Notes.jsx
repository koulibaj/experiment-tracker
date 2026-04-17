import { useState } from "react";
import { socket } from "../socket";

export default function Notes({ exp }) {
  const [text, setText] = useState("");

  const addNote = () => {
    socket.emit("add_note", {
      id: exp._id,
      note: text
    });
    setText("");
  };

  return (
    <div>
      <h4>Notes</h4>

      <ul>
        {exp.notes.map((n, i) => (
          <li key={i}>{n.text}</li>
        ))}
      </ul>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add note..."
      />
      <button onClick={addNote}>Add</button>
    </div>
  );
}