import styled from 'styled-components';

export const Primary = styled.button`
	width: 150px;
	height: 45px;
	background: var(--color-primary);
	color: var(--text-light);
	border-radius: 50px;
	border: none;
	box-shadow: 2px 2px 14px var(--box-shadow);
	font: 500 .9rem 'Ubuntu',sans-serif;
	transition: ease-in-out .3s;
	cursor: pointer;

	&:hover {
		opacity: .8;
		box-shadow: 2px 2px 14px var(--box-shadow-hover);
	}
`;

export const Secondary = styled.button`
	width: 150px;
	height: 45px;
	border: none;
	border: 2px solid var(--color-primary);
	color: var(--color-primary);
	border-radius: 50px;
	box-shadow: 2px 2px 14px var(--box-shadow);
	font: 500 .9rem 'Ubuntu',sans-serif;
	transition: ease-in-out .3s;
	cursor: pointer;

	&:hover {
		background: var(--color-primary);
		color: var(--text-light);
		box-shadow: 2px 2px 14px var(--box-shadow-hover);		
	}
`;