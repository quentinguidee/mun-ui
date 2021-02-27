import React from 'react'

import 'mun-ui/dist/index.css'

import { darkTheme, MunApp } from 'mun-ui'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import TablePage from './pages/TablePage'

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <MunApp>
                <BrowserRouter>
                    <Header />
                    <TablePage />
                </BrowserRouter>
            </MunApp>
        </ThemeProvider>
    )
}

export default App
