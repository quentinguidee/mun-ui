import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        color: {
            background: string
            secondaryBackground: string
            thirdBackground: string
            text: string
            secondaryText: string
            invertedText: string
            accent: string
            green: string
            yellow: string
            orange: string
            red: string
            white: string
        }
    }
}

export const lightTheme = {
    color: {
        background: '#fff',
        secondaryBackground: '#eeeeee',
        thirdBackground: '#dbdbdb',
        text: '#000',
        secondaryText: '#2e2e2e',
        invertedText: '#e7e7e7',
        accent: '#39a0cf',
        green: '#66bb6a',
        yellow: '#b9951f',
        orange: '#d6763f',
        red: '#ef5350',
        white: '#e7e7e7'
    }
}

export const darkTheme = {
    color: {
        background: '#131313',
        secondaryBackground: '#222222',
        thirdBackground: '#353535',
        text: '#e7e7e7',
        secondaryText: '#a7a7a7',
        invertedText: '#000',
        accent: '#2c83ac',
        green: '#408a31',
        yellow: '#c5a050',
        orange: '#c46b37',
        red: '#862e2e',
        white: '#e7e7e7'
    }
}
