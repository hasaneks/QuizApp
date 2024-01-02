import { StyleSheet } from 'react-native'
import { color, typography } from 'style'

export default StyleSheet.create({
  header: {
    flexDirection: 'row',
    marginBottom: 15,
    marginTop: 20,
    justifyContent: 'space-between'
  },
  progressBarContainer: {
    height: 5,
    borderRadius: 100,
    overflow: 'hidden',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
  progressBar: (width) => ({
    height: '100%',
    width: `${width}%`,
    backgroundColor: '#FFD873'
  }),
  title: {
    color: color.TEXT_PRIMARY,
    fontWeight: '600',
    fontSize: typography.NORMAL
  },
  progress: {
    color: '#FFD873',
    fontSize: typography.NORMAL
  }
})
