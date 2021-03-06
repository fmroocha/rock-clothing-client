import styled from "styled-components";

export const ProductsContainer = styled.div`
	height: 100%;
`;

export const Products = styled.div`
	width: 500px;
	padding: 0 20px;
	display: flex;
	flex-direction: column;

	@media (max-width: 1024px) {
		width: 300px;
	}
`;

export const ProductsHeadline = styled.div`
	display: flex;
	justify-content: center;
	font-size: 1.3rem;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 15px 0;

	@media (max-width: 1024px) {
		font-size: 1.1rem;
	}

	h2 {
		margin: 0;
		border-bottom: 1px solid #c9d6df;
	}
`;
