import React from 'react';
import Title from './title';
import NavigationBar from './NavigationBar';
import PageView from './pageView';
import Footer from './footer';
import data from '../data/siteInformation.json';

class IdleRantsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPageIndex: 0,
    };
  }

  onChangePageIndex(newPageIndex) {
    this.setState({ selectedPageIndex: newPageIndex });
  }

  render() {
    return (
      <React.Fragment>
        <Title />
        <NavigationBar
          pages={data.pages}
          selectedPageIndex={this.state.selectedPageIndex}
          onChangePageIndex={this.onChangePageIndex.bind(this)}
        />
        <PageView
          pages={data.pages}
          selectedPageIndex={this.state.selectedPageIndex}
          pageContentByNameKey={data.pageContentByNameKey}
        />
        <Footer />
      </React.Fragment>
    );
  }
}

export default IdleRantsView;
