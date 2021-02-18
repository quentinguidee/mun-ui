import React from 'react'

import {
    Header,
    HeaderAccount,
    HeaderLink,
    HeaderLinks,
    HeaderLogo,
    HeaderSpace,
    darkTheme,
    MunApp
} from 'mun-ui'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <MunApp>
                <BrowserRouter>
                    <Header>
                        <HeaderLogo>Mun UI</HeaderLogo>
                        <HeaderSpace />
                        <HeaderLinks>
                            <HeaderLink to='/first'>First</HeaderLink>
                            <HeaderLink to='/second'>Second</HeaderLink>
                        </HeaderLinks>
                        <HeaderSpace grow={5} />
                        <HeaderAccount
                            src='https://picsum.photos/seed/seed/40'
                            name='Username'
                        />
                    </Header>
                </BrowserRouter>
            </MunApp>
        </ThemeProvider>
    )
}

export default App
