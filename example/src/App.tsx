import React, { Component } from 'react'

import 'mun-ui/dist/index.css'

import { darkTheme, lightTheme, MunApp } from 'mun-ui'
import { ThemeProvider } from '@emotion/react'
import { BrowserRouter, Route } from 'react-router-dom'
import Header from './components/Header'
import TablePage from './pages/TablePage'
import FormPage from './pages/FormPage'

export class App extends Component<{}, { isLightTheme: boolean }> {
    constructor(props: {}) {
        super(props)
        this.state = { isLightTheme: true }
    }

    render() {
        return (
            <ThemeProvider
                theme={this.state.isLightTheme ? lightTheme : darkTheme}
            >
                <MunApp>
                    <BrowserRouter>
                        <Header
                            toggleTheme={() => {
                                this.setState({
                                    isLightTheme: !this.state.isLightTheme
                                })
                            }}
                        />
                        <Route path='/table' component={TablePage} />
                        <Route path='/form' component={FormPage} />
                    </BrowserRouter>
                </MunApp>
            </ThemeProvider>
        )
    }
}

export default App
