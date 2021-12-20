import React from 'react'
import auth from '../auth'

function AnotherLayout(props) {
	return (
		<div>
			<h3>Another Layout Component</h3>
			<button onClick={() => {
				auth.logout(() => {
					props.history.push('/')
				})
			}} >Logout</button>
		</div>
	)
}

export default AnotherLayout
