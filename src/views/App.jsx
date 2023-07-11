import './App.css'
import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Menu from '../components/layout/Menu'
import Content from '../components/layout/Content'

import { DataContext, data } from '../data/DataContext'

import Storage from '../data/Storage'

const App = props => {
    const [state, setState] = useState(data);

    return (
        <Storage>
            <DataContext.Provider value={{ state, setState }}>
                <div className="App">
                    <Router>
                        <Menu />
                        <Content />
                    </Router>
                </div>
            </DataContext.Provider>
        </Storage>
    )
}

export default App