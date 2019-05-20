import React, { Component } from "react";
import MouseRenderProps from "./MouseRenderProps";
import styled from "styled-components";

class MouseBoxRenderPropsUnstyled extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <MouseRenderProps
          render={({ x, y }) => (
            <h1>
              Position is {x}, {y}
            </h1>
          )}
        />
      </div>
    );
  }
}

const MouseBoxRenderProps = styled(MouseBoxRenderPropsUnstyled)`
  height: 100%;
`;

export default MouseBoxRenderProps;
