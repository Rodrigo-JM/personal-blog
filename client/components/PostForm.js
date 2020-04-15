import React, { Component } from "react";
import { connect } from "react-redux";
import {newPost, editPost} from '../redux/singlePost'
import SimpleMDE from 'simplemde'

export class PostForm extends Component {
  constructor() {
    super();
    this.state = {
      model: {},
      wasSubmitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.goToResource = this.goToResource.bind(this)
  }

  goToResource() {
    if (this.props.location.pathname.match("projects")) {
        this.props.history.push(`/projects/${this.state.project.id}`)
      } else if (this.props.location.pathname.match("bio")) {
        this.props.history.push(`bio`);
      } else if (this.props.location.pathname.match("blog")) {
        this.props.history.push(`/blog/posts/${this.props.post.id}`)
      }
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
      } else if (this.props.location.pathname.match("edit")) {
        if (this.props.location.pathname.match("projects")) {
            this.setState({ model: this.props.project });
          } else if (this.props.location.pathname.match("bio")) {
            this.setState({ model: this.props.bio });
          } else if (this.props.location.pathname.match("blog")) {
            this.props.editPost(this.state.model)
          }  
      }

      this.setState({wasSubmitted: true})
  }

  handleChange(event) {
      this.setState({
          model: {
              ...this.state.model,
            [(event.target.name) ? event.target.name : "content"]: event.target.value
          }
      })

      event.target.style.height = '1px'
      event.target.style.height = (event.target.scrollHeight + 5)+"px" 
      
  }

  componentDidMount() {
    if (this.props.location.pathname.match("new")) {
        if (this.props.location.pathname.match("projects")) {
            this.setState({ model: this.props.project });
          } else if (this.props.location.pathname.match("bio")) {
            this.setState({ model: this.props.bio });
          } else if (this.props.location.pathname.match("blog")) {
            this.setState({ model: this.props.post });
          } 
      } else if (this.props.location.pathname.match("edit")) {
        if (this.props.location.pathname.match("projects")) {
            this.setState({ model: this.props.project });
          } else if (this.props.location.pathname.match("bio")) {
            this.setState({ model: this.props.bio });
          } else if (this.props.location.pathname.match("blog")) {
            this.setState({ model: this.props.post });
          }
        }
  }

  componentDidUpdate() {
    if (!document.getElementsByClassName("CodeMirror").length) {
        const script = document.createElement('script');
        script.id = "editor"
        script.innerHTML = `var simplemde = new SimpleMDE({element: document.getElementById("content"), inputStyle: "textarea"})`
        document.body.appendChild(script)
        const [editor] = document.getElementsByClassName("CodeMirror cm-s-paper CodeMirror-wrap")
        editor.addEventListener('keyup', this.handleChange)
    }

  }

  componentWillUnmount() {
    const editor = document.getElementById("editor")
    // deleteObject(simplemde)    
    editor.parentNode.removeChild(editor)
  }

  render() {
    return (
      <div className="form-div">
        {(this.state.wasSubmitted) && <div>Resource submitted!! Go to it: <button onClick={() => this.goToResource()} >Go</button></div>}
        <form className="form" onSubmit={this.handleSubmit}>
          {Object.keys(this.state.model)
            .filter(
              (key) =>
                key !== "id" && key !== "createdAt" && key !== "updatedAt"
            )
            .map((field, index) => {
              return (
                <textarea
                  id={(field === 'content') ? 'content' : ''}
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
        newPost: (post) => dispatch(newPost(post)),
        editPost: (post) => dispatch(editPost(post))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostForm);
