import { ChangeEvent, Component } from "react";

interface Props {
  question: string;
  placeholder: string;
}

interface State {
  output: string;
}

export class UserInput extends Component<Props, State> {
  state = {
    output: "???",
  };

  update_answer = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ output: event.target.value });
  };

  render() {

    const { question, placeholder } = this.props;
    const { output } = this.state;

    return (
      <div className="vbox mt20">
        <div className="hbox space-between">
          <h1 className="paragraph">{question}</h1>

          <input
            type="text"
            className="input cap"
            placeholder={placeholder}
            onChange={this.update_answer}
          />
        </div>
        <br />
        <h3 className="paragraph text-left white-text cap">
          Your answer: {output}
        </h3>
      </div>
    );
  }
}
