import React from "react";

export default class ErrorBoundry extends React.Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({
      hasError: true,
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div class="page-wrap d-flex flex-row align-items-center">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-md-12 text-center">
                <span class="display-1 d-block">404</span>
                <div class="mb-4 lead">
                  The page you are looking for was not found.
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
