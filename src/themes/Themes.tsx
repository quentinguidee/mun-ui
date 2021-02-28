import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        color: {
            background: string
            secondaryBackground: string
            thirdBackground: string
            text: string
            secondaryText: string
            accent: string
            checkboxTrue: string
            checkboxUndef: string
            checkboxFalse: string
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
        accent: '#39a0cf',
        checkboxTrue: '#66bb6a',
        checkboxUndef: '#eeeeee',
        checkboxFalse: '#ef5350'
    }
}

export const darkTheme = {
    color: {
        background: '#131313',
        secondaryBackground: '#222222',
        thirdBackground: '#353535',
        text: '#e7e7e7',
        secondaryText: '#a7a7a7',
        accent: '#2c83ac',
        checkboxTrue: '#408a31',
        checkboxUndef: '#222222',
        checkboxFalse: '#862e2e'
    }
}
