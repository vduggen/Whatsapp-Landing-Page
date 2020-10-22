import styled from 'styled-components';

export const Container = styled.article`
	margin:0 auto;
	min-height: 100vh;

	@media (min-width: 1200px) {
		width: 1140px;
	}
`;

export const Divisor = styled.hr`
	width: 75%;
	margin: 2rem auto;
	border: 1px solid var(--color-divisor);
`;