import React from "react";
import { Header, Interpreted, AreaText, Content } from "./App.styles";

const ReactMarkdown = require("react-markdown");

class AppPrime extends React.Component {
  constructor(props) {
    super(props);
    this.fileInp = React.createRef();
    this.state = {
      interepreted: "# This is a header\n\nAnd this is a paragraph"
    };
  }
  Interpret = e => {
    this.setState({
      interepreted: e.target.value
    });
  };
  upload = e => {
    let rd = new FileReader();
    rd.onload = e => {
      this.fileInp.current.value = e.target.result;
    };
    rd.readAsText(e.target.files[0]);
  };
  render() {
    return (
      <React.Fragment>
        <Header>Your Sample Markdown Interpreter</Header>
        <input type="file" onChange={this.upload} />
        <Content>
          <div
            style={{
              height: 40,
              marginTop: -10
            }}
          >
            <div
              style={{
                display: "inline-block",
                color: "#a0aabf",
                fontSize: ".8rem",
                marginTop: 20,
                marginLeft: "1%"
              }}
            >
              MARKDOWN
            </div>
            <div
              style={{
                display: "inline-block",
                color: "#a0aabf",
                fontSize: ".8rem",
                marginLeft: "44%"
              }}
            >
              PREVIEW
            </div>
          </div>
          <div>
            <AreaText
              ref={this.fileInp}
              onChange={this.Interpret}
              rows="30"
              placeholder="Type your text here .."
            />
            <Interpreted>
              <ReactMarkdown source={this.state.interepreted} />
            </Interpreted>
          </div>
        </Content>
        <span style={{ position: "absolute", bottom: 20, left: 20 }}>
          © All rights are <b>not</b> reserved
        </span>
      </React.Fragment>
    );
  }
}

export default AppPrime;
