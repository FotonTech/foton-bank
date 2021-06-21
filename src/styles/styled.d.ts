import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: 'dark',
    color: {
      text: {
        white: string,
        yellow: string,
        black: string,
      }
    },
  }
}
