import React, { useState } from "react";
import ContentEditable from "react-contenteditable";

export default function Editable({ text, completed, getChange }) {
  const [state, setState] = useState(text);
  let contentEditable = React.createRef();

  const handleChange = (evt) => {
    setState(evt.target.value);
  };

  const handleBlur = () => {
    getChange(state);
  };

  return (
    <ContentEditable
      style={{ textDecoration: completed ? "line-through" : "none" }}
      innerRef={contentEditable}
      html={state} // innerHTML of the editable div
      disabled={completed} // use true to disable editing
      onChange={handleChange} // handle innerHTML change
      tagName="span" // Use a custom HTML tag (uses a div by default)
      onBlur={handleBlur}
    />
  );
}
