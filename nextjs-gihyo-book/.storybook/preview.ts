import { createGlobalStyle } from 'styled-components'
import * as NextImage from 'next/image'

export const parameters = {
  actions: { argTypeRegex: '^on[A-Z].*'}  ,
  controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
}

export const GlobalStyle = createGlobalStyle`
  html,
  body,
  textarea {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxyge, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, san-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    transition: .25s;
    color: #000000;
  }
`

// next/imageの差し替え
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => typeof props.src === 'string' ? (
    <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
  ) : (
    <OriginalNextImage {...props} unoptimized />
  ),
})
