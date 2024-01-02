import { StyleSheet } from 'react-native'
import { padding } from 'style'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  header: (paddingTop) => ({
    backgroundColor: '#305B83',
    padding: padding.SMALL,
    paddingTop
  }),
  questionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 15
  },
  currentQuestion: {
    backgroundColor: '#284F74',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  footer: (paddingBottom) => ({
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: padding.MEDIUM,
    paddingBottom
  }),
  previousButton: {
    backgroundColor: '#03A9F1'
  },
  nextButton: {
    backgroundColor: '#1ABC9C'
  }
})
