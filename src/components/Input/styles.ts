import {StyleSheet} from 'react-native';
import {COLORS} from 'theme/colors';

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    color: COLORS.SECONDARY_GRAY,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: COLORS.SECONDARY_GRAY,
    borderWidth: 1,
  },
  errorMessage: {
    fontSize: 12,
    color: COLORS.RED_ERRROR,
  },
});

export default styles;
