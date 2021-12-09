import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.ShowText = this.ShowText.bind(this)
  }

  ShowText(){
    this.props.ChangeStatus(this.props.data,this.props.redir)
  }

  render() {
    return (
      <div className="col s12 m2"  onClick={this.ShowText}>
        <blockquote>{this.props.data.title}</blockquote>
        <p>
          {this.props.data.text}
        </p>
      </div>
    );
  }
}

export default Card;
