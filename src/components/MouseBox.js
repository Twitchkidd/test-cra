import React, { Component } from "react";
import styled from "styled-components";
import withMouse from "./withMouse";

class BoxUnstyled extends Component {
  render() {
    return (
      <div>
        <h1>
          Position is {this.props.mouse.x || null}, {this.props.mouse.y || null}
          .
        </h1>
      </div>
    );
  }
}

const MouseBoxUnstyled = withMouse(BoxUnstyled);

export const MouseBox = styled(MouseBoxUnstyled)`
  height: 100%;
`;
