import MarkdownDisplay from 'react-native-markdown-display'
import styles from './Markdown.style'
export default function ({ children, ...props }) {
  return (
    <MarkdownDisplay style={{ ...styles, ...props.style }} {...props}>
      {children}
    </MarkdownDisplay>
  )
}
