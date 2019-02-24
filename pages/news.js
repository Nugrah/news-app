import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import App from './components/App'

import './css/bootstrap.min.css'
import './css/style.css'

if( typeof window !== 'undefined' ){
    let webFont = require('webfontloader')
    
    webFont.load({
        google: {
            families: ['Open Sans']
        }
    })
}

export default class extends React.Component {
    render(){
        return <App />
    }
}