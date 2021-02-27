import '@emotion/react'

declare module '@emotion/react' {
    export interface Theme {
        color: {
            background: string
            secondaryBackground: string
            thirdBackground: string
            text: string
            secondaryText: string
        }
    }
}

export const lightTheme = {
    color: {
        background: '#fff',
        secondaryBackground: '#eeeeee',
        thirdBackground: '#dbdbdb',
        text: '#000',
        secondaryText: '#2e2e2e'
    }
}

export const darkTheme = {
    color: {
        background: '#0f0f0f',
        secondaryBackground: '#181818',
        thirdBackground: '#242424',
        text: '#e7e7e7',
        secondaryText: '#a7a7a7'
    }
}
