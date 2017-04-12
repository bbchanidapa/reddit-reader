import React, { Component, PropTypes } from 'react';
import { Tabs, Tab, TabHeading, Icon } from 'native-base';
import CardItemList from '../../../../components/pages/content/cards/listitem';

class SortTypeBar extends Component {
  renderRow() {
    return this.props.sortType.map((item) => {
      return (
        <Tab
          key={item.id}
          sortby={item.sortby}
          heading={<TabHeading><Icon name={item.icon} /></TabHeading>}
        >
          <CardItemList {...this.props} />
        </Tab>
      );
    });
  }
  render() {
    return (
      <Tabs tabBarPosition="top" onChangeTab={(item) => { this.props.actionSort(item.ref.props.sortby) }} >
        { this.renderRow.call(this) }
      </Tabs>
    );
  }
}

SortTypeBar.propTypes = {
  sortType: PropTypes.node.isRequired,
  actionSort: PropTypes.func.isRequired
}

export default SortTypeBar;
