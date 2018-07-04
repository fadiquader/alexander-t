import * as React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

export const Group = props => {
  const { children, style, center, container } = props;
  const gStyle = [styles.group, style];
  return (
    <View
      style={[
        gStyle, center && styles.center,
        container && styles.container,
      ]}
    >
      {children}
    </View>
  )
};

Group.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  center: PropTypes.bool,
  container: PropTypes.bool,
};

Group.defaultProps = {
  style: {}
};

const styles = StyleSheet.create({
  group: {
    backgroundColor: 'white',
    marginVertical: 8,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  }
});
