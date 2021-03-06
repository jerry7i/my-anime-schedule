import React from 'react';
import './Header.css';
import { animateScroll as scroll } from 'react-scroll';

export default function Header() {
	const scrollToTop = () => {
		scroll.scrollToTop({duration: 500})
	}

	return (
		<div className='header'>
			<h1 onClick={() => scrollToTop()}
					className='header-text'>
				MyAnimeSchedule
			</h1>
		</div>
	)
}
