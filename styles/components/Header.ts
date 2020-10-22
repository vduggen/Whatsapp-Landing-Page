import styled from 'styled-components';

export const Container = styled.header`
	width: 100%;
	height: 80px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	nav {
		ul {
			display: flex;

			li {
				p {
					margin: 0 1rem;
					color: var(--text-light);
					cursor: pointer;
					transition: ease-in-out .3s;

					&:hover {
						opacity: .7;
					}
				}
			}
		}
	}
`;