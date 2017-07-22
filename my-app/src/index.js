import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

class ShoppingList extends React.Component{
	render(){
		return (
			<div className='shopping-list'>
				<h1>ShoppingList for {this.props.name}</h1>
				<ul>
					<li>Instagram</li>
					<li>WhatsApp</li>
					<li>Oculus</li>
				</ul>
			</div>
		)
	}
}

ReactDom.render(<ShoppingList name='Garen'/>,
	document.getElementById('root')
)