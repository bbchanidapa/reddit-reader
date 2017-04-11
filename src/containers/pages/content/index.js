// import React, { Component } from 'react';
// import TabsContainer from './tabs';
// import { NAVBAR_LIST } from '../../../config/constants';

// export default class ConentContainer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     };
//   }
//   render() {
//     return (
//       <TabsContainer navbar={NAVBAR_LIST} />
//     );
//   }
// }



import React, { Component, PropTypes } from 'react';
import { Content, Body, Text } from 'native-base';


class ContentContainer extends Component {
  render() {
    return (
      <Content>
        <Body>
          <Text>ContentContainer</Text>
        </Body>
      </Content>
    );
  }
}

ContentContainer.propTypes = {

};

export default ContentContainer;
