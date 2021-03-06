import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 10px 0;
	height: calc(100vh - 64px);
	width: 85%;
	margin: auto;
`;

export const Headline = styled.div`
	display: flex;
	justify-content: center;
	font-size: 1.3rem;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: 20px 0;

	h2 {
		margin: 0;
		border-bottom: 1px solid #c9d6df;
	}
`;

export const Header = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 250px repeat(3, 1fr) 250px;
	align-items: center;
	justify-items: center;
	border-bottom: 1px solid #c9d6df;
	padding: 10px 0;
	color: #1e2022;

	@media (max-width: 1024px) {
		display: none;
	}
`;

export const HeaderItem = styled.div`
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 0.95rem;
`;

export const EmptyMessage = styled.div`
	font-weight: 600;
	font-size: 1.6rem;
	text-transform: uppercase;
	letter-spacing: 1px;
	margin: auto 0;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	p {
		margin: 0;
	}
`;

export const Total = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	align-self: flex-end;
	font-size: 1.6rem;
	max-width: 20%;
	text-transform: uppercase;
	font-weight: 600;
	letter-spacing: 1px;
	padding: 10px 0;

	@media (max-width: 1024px) {
		min-width: 100%;
		align-items: center;
	}
`;
