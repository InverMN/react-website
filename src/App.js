import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PageWrapper from './components/PageWrapper'
import Home from './components/pages/Home'
import Services from './components/pages/Services'

function App() {
  return ( 
		<Router>
			<PageWrapper>
				<Route 
					path="/"
					exact={true}
					component={Home}
				/>
				<Route 
					path="/services"
					component={Services}
				/>
			</PageWrapper> 
		</Router>
	)
}

export default App