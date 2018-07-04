import * as React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';
// project files
import styles from './styles';

export class Button extends React.PureComponent {

  render() {
    const {
      type, disabled,
      btnStyle,
      textStyle,
      children,
      ...rest,
    } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.btn, styles.primaryBtn, btnStyle]}
        {...rest}
      >
        <Text style={[styles.primaryText, textStyle]}>
          {children}
        </Text>
      </TouchableOpacity>
    )
  }
}

PropTypes.defaultProps = {
  type: PropTypes.string,
  disabled: PropTypes.bool,
  btnStyle: PropTypes.object,
  textStyle: PropTypes.object,
  onPress: PropTypes.func,
};
PropTypes.defaultProps = {
  type: 'primary',
  btnStyle: {},
  textStyle: {},
  onPress: () => null,
};

