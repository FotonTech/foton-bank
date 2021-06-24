import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'dark',
    text: {
      color: {
        white: string,
        yellow: string,
        black: string,
      }
    },
    background: {
      gray: string
    }
  }
}
