import React from 'react';

import WatchShoping from './WatchShoping'
import Regin from './Regin'


class Home extends React.Component {
  render() {
    const { pathname } = this.props.location;

    if (pathname === '/Regin') return <Regin />
    return <WatchShoping children={this.props.children} />
  }
}


export default Home;
