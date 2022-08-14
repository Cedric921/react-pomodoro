import React from 'react';

const Button = ({ title, activeClass, _cb }) => {
	return (
		<button className={activeClass } onClick={_cb}>
			{title}
		</button>
	);
};

export default Button;
