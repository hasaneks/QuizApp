import { StyleSheet } from 'react-native'
import { typography, color } from 'style'
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  titleContainer: {
    position: 'absolute',
    width: '100%',
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: -1
  },
  title: {
    fontSize: typography.BIG,
    color: color.TEXT_PRIMARY,
    fontWeight: '700'
  }
})
