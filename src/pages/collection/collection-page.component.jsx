import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { Container, Headline } from "./collection-page.styles";
import { GET_COLLECTION_PRODUCTS } from "../../graphql/queries/server-queries";
import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({
	match: {
		params: { collectionTitle },
	},
}) => {
	const { loading, data } = useQuery(GET_COLLECTION_PRODUCTS, {
		variables: { title: collectionTitle },
	});

	if (loading) return "Loading...";

	const {
		collection: { products },
	} = data;
	return (
		<Container>
			<Headline>
				<h2>{collectionTitle}</h2>
			</Headline>
			{products.map((product) => (
				<CollectionItem key={product.id} product={product} />
			))}
		</Container>
	);
};

export default CollectionPage;
