import React from 'react'

import 'mun-ui/dist/index.css'

import { darkTheme, MunApp } from 'mun-ui'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import TablePage from './pages/TablePage'
import FormPage from './pages/FormPage'

const App = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <MunApp>
                <BrowserRouter>
                    <Header />
                    <Route path='/table' component={TablePage} />
                    <Route path='/form' component={FormPage} />
                </BrowserRouter>
            </MunApp>
        </ThemeProvider>
    )
}

export default App
