import * as React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput } from 'react-native';
//
import styles from './styles';

export class Input extends React.PureComponent {
  onChangeText = txt => {
    const { name } = this.props;
    this.props.onChangeText(name, txt)
  };

  render() {
    const { label, containerStyle, inputProps } = this.props;
    return (
      <View style={[styles.inputContainer, containerStyle]}>
        {
          label &&
          <Text style={[styles.label]}>{label}</Text>
        }
        <TextInput
          style={[styles.input]}
          underlineColorAndroid="rgba(0,0,0,0)"
          onChangeText={this.onChangeText}
          {...inputProps}
        />
      </View>
    )
  }
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  containerStyle: PropTypes.object,
  onChange: PropTypes.func,
  onEndEditing: PropTypes.func,
};

Input.defaultProps = {
  containerStyle: {},
  onChange: () => null,
  inputProps: {
    autoCorrect: false,
  }
};
