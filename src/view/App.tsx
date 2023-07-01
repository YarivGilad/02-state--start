import { Component } from "react";
import { TopBar } from "./TopBar";
import { UserInput } from "./UserInput";

interface State {
  booksCount: number;
  customersCount: number;
  employeesCount: number;
}

export class App extends Component<object, State> {
  myName = "Yossi";

  constructor(props:object) {
    super(props);
    this.myName = "Yariv";

    this.state = {
      booksCount: 6,
      customersCount: 0,
      employeesCount: 0,
    };

    // this.add_book = this.add_book.bind(this);
    // this.add_book = ()=> this.add_book();
  }

  addBook() {
    // this.myName = "Johnny";
    console.log("hello: ");
    console.log("this: ", this);
    const newState = this.state.booksCount + 1;
    this.setState({ booksCount: newState });
    // this.state = {{ booksCount: this.state.booksCount++ }
  }

  render() {
    // console.log("this: ", this);
    return (
      <div className="app">
        <TopBar>
          <h1>Hello State</h1>
        </TopBar>
        <h1>{this.myName}</h1>
        <h1 className="headline white-text">_ ^ _ Stateful Bookstore _ ^ _</h1>
        <div className="hbox space-between mt20">
          <h3 className="paragraph">Book counter: {this.state.booksCount}</h3>
          <button className="button" onClick={this.addBook.bind(this)}>
            add a book
          </button>
        </div>
        <br />
        <hr />
        <UserInput
          question="What is your name?"
          placeholder="Your name here..."
        />
      </div>
    );
  }
}
