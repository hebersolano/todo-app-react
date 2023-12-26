import React from "react";
import ContentEditable from "react-contenteditable";

class EditableText extends React.Component {
  constructor({ text, completed, getChange }) {
    super();
    this.contentEditable = React.createRef();
    this.state = { html: text };
    this.getChange = getChange;
    this.completed = completed;
  }

  handleChange = (evt) => {
    this.setState({ html: evt.target.value });
    console.log(evt.target.value);
  };

  handleBlur = () => {
    this.getChange(this.state.html);
  };

  render = () => {
    return (
      <ContentEditable
        innerRef={this.contentEditable}
        html={this.state.html} // innerHTML of the editable div
        disabled={false} // use true to disable editing
        onChange={this.handleChange} // handle innerHTML change
        tagName="span" // Use a custom HTML tag (uses a div by default)
        onBlur={this.handleBlur}
      />
    );
  };
}

export default EditableText;
