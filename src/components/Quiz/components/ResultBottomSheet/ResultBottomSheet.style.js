import { StyleSheet } from 'react-native'
import { typography, color, padding } from 'style'

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: padding.MEDIUM
  },
  title: {
    fontSize: typography.BIG,
    color: color.TEXT_PRIMARY,
    marginTop: 40,
    fontWeight: '700'
  },
  subTitle: {
    fontSize: typography.BIG,
    color: color.TEXT_PRIMARY,
    fontWeight: '700',
    marginBottom: 10
  },
  dopiLogo: {
    height: 70,
    width: 70,
    marginTop: 50,
    marginBottom: 20
  },
  analysisResult: {
    marginTop: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  analysisItem: {
    alignItems: 'center'
  },
  analysisItemIcon: (backgroundColor) => ({
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    width: 56,
    borderRadius: 28,
    marginBottom: 10,
    backgroundColor
  }),
  analysisText: {
    fontSize: typography.NORMAL,
    color: color.TEXT_PRIMARY,
    fontWeight: '700'
  },
  footer: (marginBottom) => ({
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: padding.MEDIUM,
    marginBottom: marginBottom
  }),
  nextUnitButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#03A9F1',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  nextUnitButtonText: {
    fontSize: typography.NORMAL,
    fontWeight: '700'
  },
  markdownStyle: {
    body: {
      color: '#fff',
      fontSize: typography.NORMAL,
      textAlign: 'center',
      lineHeight: 25
    },
    strong: { color: '#FFD335' }
  }
})
