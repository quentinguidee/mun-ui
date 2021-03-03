import React, { Component } from 'react'
import { StatusBar as MunStatusBar, StatusBarItem } from 'mun-ui'

export default class StatusBar extends Component {
    render() {
        return (
            <MunStatusBar>
                <StatusBarItem color='red'>Item 1</StatusBarItem>
                <StatusBarItem color='orange'>Item 2</StatusBarItem>
                <StatusBarItem color='yellow'>Item 3</StatusBarItem>
                <StatusBarItem>Item 4</StatusBarItem>
            </MunStatusBar>
        )
    }
}
