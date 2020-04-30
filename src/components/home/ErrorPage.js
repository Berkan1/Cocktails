import React from 'react';

function ErrorPage(props) {
  return (
		<div>
			Oops :( No cocktails found that begin with {props.letter}
		</div>
	);
} 
  
export default ErrorPage;