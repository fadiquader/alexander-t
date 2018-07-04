import { StyleSheet } from 'react-native';
// project files
import { colors} from '../../utils/theme';

export default StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
    alignItems: 'center',
    marginHorizontal: -8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  label: {
    marginHorizontal: 8,
    fontSize: 16,
  },
  input: {
    marginHorizontal: 8,
    flex: 1,
  }
});
