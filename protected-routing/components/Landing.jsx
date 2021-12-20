import React from 'react'
import auth from "../auth";

function Landing(props) {
	return (
		<div>
			<h3>Landing Page</h3>
			<button onClick={() => {
				auth.login(() => {
					props.history.push('/an')
				})
			}}>Click me</button>
		</div>
	)
}

export default Landing
