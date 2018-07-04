import { StyleSheet } from 'react-native';
//project files
import { colors } from '../../utils/theme';

export default StyleSheet.create({
  btn: {
    borderRadius: 8,
  },
  primaryBtn: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  primaryText: {
    color: 'white',
    fontSize: 20,
  }
});
