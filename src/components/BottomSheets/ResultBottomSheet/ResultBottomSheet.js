import React, { forwardRef } from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import BottomSheet from '@gorhom/bottom-sheet'
import styles from './ResultBottomSheet.style'
import Markdown from 'components/Markdown'
import Image from 'components/common/Image'
import { quizAnalysis } from 'helpers/utils'
import * as Icon from 'assets/svg'
import { useSelector } from 'react-redux'
import Button from 'components/common/Button'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const iconStyle = {
  height: 28,
  width: 28,
  color: '#fff'
}

const ResultBottomSheet = forwardRef((props, ref) => {
  const insets = useSafeAreaInsets()
  const markdownText = `Dopi Yapay Zeka seviyeni **"Temel Seviye"** olarak belirlemiştir. Seviyeni istediğin zaman ünite içerisinden değiştirebilirsin.`
  const { questions, answerList } = useSelector((state) => state.quiz)
  const { correctAnswers, wrongAnswers, blankAnswers, netPoint } = quizAnalysis(
    { answerList, questions }
  )

  return (
    <BottomSheet
      ref={ref}
      index={-1}
      snapPoints={['100%']}
      backgroundStyle={{ backgroundColor: '#305B83' }}
    >
      <SafeAreaView />
      <View style={styles.container}>
        <Text style={styles.title}>Seviye Belirleme Sınav Sonucu</Text>

        <Image
          style={styles.dopiLogo}
          source={require('assets/img/dopi.png')}
        />

        <Text style={styles.subTitle}>
          Tebrikler, sınavı başarıyla tamamladın!
        </Text>
        <Markdown style={styles.markdownStyle}>{markdownText}</Markdown>

        <View style={styles.analysisResult}>
          <View style={styles.analysisItem}>
            <View style={styles.analysisItemIcon('#369AC6')}>
              <Icon.DivideCircle {...iconStyle} />
            </View>
            <Text style={styles.analysisText}>{netPoint} Net</Text>
          </View>
          <View style={styles.analysisItem}>
            <View style={styles.analysisItemIcon('#499D8D')}>
              <Icon.Check {...iconStyle} />
            </View>
            <Text style={styles.analysisText}>{correctAnswers} Doğru</Text>
          </View>
          <View style={styles.analysisItem}>
            <View style={styles.analysisItemIcon('#EA5E63')}>
              <Icon.Error {...iconStyle} />
            </View>
            <Text style={styles.analysisText}>{wrongAnswers} Yanlış</Text>
          </View>
          <View style={styles.analysisItem}>
            <View style={styles.analysisItemIcon('#5281AB')}>
              <Icon.Minus {...iconStyle} />
            </View>
            <Text style={styles.analysisText}>{blankAnswers} Boş</Text>
          </View>
        </View>

        <View style={styles.footer(insets.bottom)}>
          <Button
            title={'Üniteye Başla'}
            buttonStyle={styles.nextUnitButton}
            textStyle={styles.nextUnitButtonText}
          />
        </View>
      </View>
    </BottomSheet>
  )
})

export default ResultBottomSheet
