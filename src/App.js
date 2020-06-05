import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import PageWrapper from './components/PageWrapper'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Team from './components/pages/Team'

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
				<Route 
					path="/about"
					component={About}
				/>
				<Route 
					path="/portfolio"
					component={Portfolio}
				/>
				<Route 
					path="/team"
					component={Team}
				/>
			</PageWrapper> 
		</Router>
	)
}

export default App