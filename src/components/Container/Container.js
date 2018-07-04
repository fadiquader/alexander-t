import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';

export const Container = props => {
  const { children, style } = props;
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  )
};

Container.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
};

Container.defaultProps = {
  style: {},
};

const styles  = StyleSheet.create({
  container: {
    flex: 1,
  }
});
