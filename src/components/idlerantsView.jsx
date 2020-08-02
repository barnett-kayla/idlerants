import React from 'react';
import Title from './title';
import NavigationBar from './NavigationBar';

class IdleRantsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPageIndex: 0,
    };
  }

  render() {
    return (
      <React.Fragment>
        <Title />
        <NavigationBar selectedPageIndex={this.state.selectedPageIndex} />
      </React.Fragment>
    );
  }
}

export default IdleRantsView;
