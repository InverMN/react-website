import './App.css'
import React from 'react'
import PageWrapper from './components/PageWrapper'
import Home from './components/pages/Home'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return ( 
		<Router>
			<PageWrapper>
				<Route 
					path="/"
					exact={true}
					component={Home}
				/>
			</PageWrapper> 
		</Router>
	)
}

export default App