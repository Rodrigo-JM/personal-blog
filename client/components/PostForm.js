import React, { Component } from "react";
import { connect } from "react-redux";
import {newPost} from '../redux/singlePost'

export class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      model: {},
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
      event.preventDefault();

      if (this.props.location.pathname.match("new")) {
        if (this.props.location.pathname.match("projects")) {
            this.setState({ model: this.props.project });
          } else if (this.props.location.pathname.match("bio")) {
            this.setState({ model: this.props.bio });
          } else if (this.props.location.pathname.match("blog")) {
            this.props.newPost(this.state.model)
          } 
      } 
  }

  handleChange(event) {
      this.setState({
          model: {
              ...this.state.model,
            [event.target.name]: event.target.value
          }
      })

      event.target.style.height = '1px'
      event.target.style.height = (event.target.scrollHeight + 5)+"px"
  }

  componentDidMount() {
    if (this.props.location.pathname.match("projects")) {
      this.setState({ model: this.props.project });
    } else if (this.props.location.pathname.match("bio")) {
      this.setState({ model: this.props.bio });
    } else if (this.props.location.pathname.match("blog")) {
      this.setState({ model: this.props.post });
    }
  }

  render() {
    return (
      <div className="form-div">
        <form className="form" onSubmit={this.handleSubmit}>
          {Object.keys(this.state.model)
            .filter(
              (key) =>
                key !== "id" && key !== "createdAt" && key !== "updatedAt"
            )
            .map((field, index) => {
              return (
                <textarea
                  key={index}
                  name={field}
                  placeholder={field}
                  value={this.state.model[field] && this.state.model[field]}
                  onChange={this.handleChange}
                />
              );
            })}
            <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state,
  };
};

const mapDispatchToProps = dispatch => {
    return {
        newPost: (post) => dispatch(newPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
