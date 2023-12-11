import React from "react";
import ContentEditable from "react-contenteditable";

class EditableText extends React.Component {
  constructor() {
    super();
    this.state = { html: "text example" };
  }

  handleChange = (evt) => {
    this.setState({ html: evt.target.value });
  };

  render = () => {
    return (
      <ContentEditable
        html={this.state.html} // innerHTML of the editable div
        disabled={false} // use true to disable edition
        onChange={this.handleChange} // handle innerHTML change
      />
    );
  };
}

export default EditableText;
