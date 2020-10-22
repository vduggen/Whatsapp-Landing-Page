import styled from 'styled-components';

export const Container = styled.section`
	margin-top: 10rem;	

	.part-about {
		height: auto;
		display: flex;
		justify-content: space-evenly;
		margin: 1rem 0;

		img {
			width: 300px;
		}

		.container-text-about {
			display: flex;
			justify-content: center;
			flex-direction: column;
			text-align: center;
			width: 43%;

			p {
				color: var(--text-muted);

				&:last-child {
					margin-top: .7rem;
				}
			}

			h2 {
				color: var(--text-black);
			}
		}
	}

	.part3 {
		img {
			width: 230px;
		}
	}
`;