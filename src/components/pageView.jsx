import React from 'react';
import SimplePage from './simplePage';
import PostPage from './postPage';

class PageView extends React.Component {
  render() {
    const selectedPage = this.props.pages[this.props.selectedPageIndex];
    switch(selectedPage.type) {
      case 'simple':
        return (<SimplePage pageContent={this.props.pageContentByNameKey[selectedPage.nameKey]} />);
      case 'post':
        return (<PostPage posts={this.props.pageContentByNameKey[selectedPage.nameKey]} />);
    }
  }
}

export default PageView;
