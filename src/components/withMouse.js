import React from "react";

const withMouse = Component => {
  return class extends React.Component {
    state = { x: 0, y: 0 };
    handleMouseMove = event => {
      this.setState({
        x: event.clientX,
        y: event.clientY
      });
    };
    render() {
      return (
        <div
          onMouseMove={this.handleMouseMove}
          className={this.props.className}>
          <Component {...this.props} mouse={this.state} />
        </div>
      );
    }
  };
};

export default withMouse;
