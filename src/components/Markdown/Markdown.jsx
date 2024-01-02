import MarkdownDisplay from 'react-native-markdown-display'
import styles from './Markdown.styles'
export default function ({ children, ...props }) {
  return (
    <MarkdownDisplay style={{ ...styles, ...props.style }} {...props}>
      {children}
    </MarkdownDisplay>
  )
}
