import React, { Component } from 'react';

const withSplitting = (getComponrnt) => {
  class WithSplitting extends Component {
    state = {
      Splitted: null,
    };
    constructor(props) {
      super(props);
      getComponrnt().then(({ default: Splitted }) => {
        this.setState({
          Splitted,
        });
      });
    }
    render() {
      const { Splitted } = this.state;
      if (!Splitted) {
        return null;
      }
      return <Splitted {...this.state} />;
    }
  }
  return WithSplitting;
};
export default withSplitting;
// HoC
