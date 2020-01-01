import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {PrimaryButton, Label, Link} from './styles';

export default function Button(props) {
  const {children, onPress, button, shadow, link} = props;
  const [hiddeShadow, toggleShadow] = useState(true);

  const pressIn = () => toggleShadow(false);
  const pressOut = () => toggleShadow(true);
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      onPressOut={pressOut}
      onPressIn={pressIn}>
      <>
        {button && (
          <PrimaryButton {...props} shadow={shadow && hiddeShadow}>
            <Label>{children}</Label>
          </PrimaryButton>
        )}
        {link && <Link {...props}>{children}</Link>}
      </>
    </TouchableOpacity>
  );
}
