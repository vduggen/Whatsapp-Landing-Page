import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	justify-content: space-between;
	height: calc(100vh - 80px);

	#esq-banner {
		display: flex;
		align-items: flex-start;
		justify-content: center;
		flex-direction: column;

		h2 {
			color: var(--text-black);
		}

		p {
			color: var(--text-muted);
		}

		nav {
			margin-top:1.875rem;

			button {
				&:first-child {
					margin-right: .7rem;
				}
			}
		}
	}

	#dir-banner {
		position: absolute;
		top: 50px;
		right: 40px;
	}
`;