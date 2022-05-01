import './App.css';
import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Men from './components/Men';
import Shoes from './components/Shoes';
import View from './components/View';
import { ADDIDAS } from './addidas';
import Err from './components/Err';

export default class App extends Component {
	constructor(props) {
		super(props)

		this.state = {
			addidas: ADDIDAS
		}
	}
	render() {

		return (
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path='/' element={<Main/>} />
					<Route path='/men' element={<Men/>} />
					<Route path='/addidas' element={<Shoes addidas={this.state.addidas}/>} />
					<Route path='/addidas/:addId' element={<View addidas={this.state.addidas} />} />
					<Route path='/err' element={<Err/>} />
					<Route path='*' element={<Err/>} />
				</Routes>
			</BrowserRouter>
		)
	}
}

