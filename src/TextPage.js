import React from "react";
import Card from "./Card";

class TextPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="TextPage">
        <div id="main_text">
          <blockquote>
            <h1>{this.props.data.title}</h1>
          </blockquote>
          {this.props.data.text}
        </div>
        <div id="similar">
          {this.props.similar.map((elem) => {
            return <Card redir={false} ChangeStatus={this.props.ChangeStatus} data={elem} key={elem.id} />;
          })}
        </div>
      </div>
    );
  }
}

export default TextPage;
