import React from 'react'

export default function Header() {
	return (
		<div style={headerStyle}>
			<h1>MyAnimeSchedule</h1>
		</div>
	)
}

const headerStyle = {
	position: 'fixed',
	width: '100%',
	top: '0',
	padding: '10px',
	color: '#EEE',
	backgroundColor: '#222',
	zIndex: '99',
}