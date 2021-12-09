import React from "react";
import Announcement_data from "./data.json";
import Card from "./Card";
import TextPage from "./TextPage";

function SerSimilar(data, elem) {
  let code = elem.id;
  let new_data = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].id !== code) {
      if (
        SimilarWord(data[i].title, elem.discription) ||
        SimilarWord(elem.title, data[i].discription) ||
        SimilarWord(elem.title, data[i].title) ||
        SimilarWord(elem.discription, data[i].discription)
      ) {
        new_data.push(data[i]);
      }
    }
  }
  return new_data;
}
function SimilarWord(word1, word2) {
  let a_parts = word1.split(" ");
  let b_parts = word2.split(" ");
  let a_length = a_parts.length;
  let b_length = b_parts.length;

  for (let i_a = 0; i_a < a_length; i_a += 1) {
    for (let i_b = 0; i_b < b_length; i_b += 1) {
      if (a_parts[i_a] === b_parts[i_b]) {
        return true;
      }
    }
  }
  return false;
}

class Field extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      data: null,
      similar_data: null,
      old_data: Announcement_data,
      new_data: Announcement_data,
    };
    this.ChangeStatus = this.ChangeStatus.bind(this);
  }

  componentWillReceiveProps() {
    if (this.props.search.length>1) {
      console.log(this.props.search)
      let data = Announcement_data;
      let new_data1 = [];
      for (let i = 0; i < data.length; i++) {
        if (SimilarWord(data[i].title, this.props.search)) {
          new_data1.push(data[i]);
        }
      }
      this.setState({ new_data: new_data1 });
    }else{
      this.setState({new_data:this.state.old_data})
    }
  }

  ChangeStatus = (data, redir) => {
    if (redir) {
      this.setState({
        status: !this.state.status,
        data: data,
        similar_data: SerSimilar(Announcement_data, data),
      });
    } else {
      this.setState({
        data: data,
        similar_data: SerSimilar(Announcement_data, data),
      });
    }
  };

  render() {
    if (this.state.status) {
      return (
        <div>
          {this.state.new_data.map((elem) => {
            return (
              <Card
                ChangeStatus={this.ChangeStatus}
                redir={true}
                data={elem}
                key={elem.id}
              />
            );
          })}
        </div>
      );
    } else {
      return (
        <TextPage
          similar={this.state.similar_data}
          ChangeStatus={this.ChangeStatus}
          data={this.state.data}
        />
      );
    }
  }
}

export default Field;
