import { Component } from "react";

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error) {
    // console.error(error);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      return <p>Something Went Wrondg</p>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
