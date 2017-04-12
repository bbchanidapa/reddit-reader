import React, { PropTypes } from 'react';
import { Button, Icon } from 'native-base';

const FooterItem = props => (
  <Button onPress={props.action}>
    <Icon name={props.icon} />
  </Button>
);

FooterItem.propTypes = {
  icon: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default FooterItem;
