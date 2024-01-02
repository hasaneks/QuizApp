import { StyleSheet } from 'react-native'
import { padding, color, typography } from 'style'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.LIGHT_BLUE,
    padding: padding.MEDIUM
  },
  handle: {
    backgroundColor: color.LIGHT_BLUE,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },

  shadow: {
    backgroundColor: 'red'
  },
  header: {
    backgroundColor: color.LIGHT_BLUE,
    padding: padding.MEDIUM,
    flexDirection: 'row'
  },
  headerIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#6A89CC',
    borderRadius: 10,
    height: 50,
    width: 50,
    marginRight: padding.SMALL
  },
  headerInfo: {
    justifyContent: 'space-between',
    paddingVertical: 5
  },
  title: {
    color: color.TEXT_PRIMARY,
    fontSize: typography.NORMAL,
    fontWeight: '600'
  },
  subTitle: {
    color: '#97BDE0',
    fontSize: typography.SMALL,
    fontWeight: '400'
  },
  optionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#285178',
    borderRadius: 10,
    padding: 10
  },
  optionList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    marginLeft: padding.MEDIUM
  },
  option: (isSelected) => ({
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: isSelected ? '#359ECE' : '#6C8EAE',
    backgroundColor: isSelected ? '#359ECE' : 'transparent'
  })
})
