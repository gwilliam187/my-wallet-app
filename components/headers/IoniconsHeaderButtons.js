import * as React from 'react';
import { Icon } from 'expo';
import { HeaderButtons, HeaderButton } from 'react-navigation-header-buttons';

import Colors from '../../constants/Colors';

const IoniconsHeaderButton = props => (
  <HeaderButton { ...props } IconComponent={ Icon.Ionicons } iconSize={ 23 } color={ Colors.neutral } />
);

export const IoniconsHeaderButtons = props => {
  return (
    <HeaderButtons
      HeaderButtonComponent={ IoniconsHeaderButton }
      OverflowIcon={<Icon.MaterialIcons name="more-vert" size={ 23 } color={ Colors.neutral } />}
      { ...props }
    />
  );
};

export const Item = HeaderButtons.Item;