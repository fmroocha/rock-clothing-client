import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { GET_COLLECTIONS } from "../../graphql/queries/server-queries";

import Directory from "./directory.component";
import Spinner from "../spinner/spinner.component";

const DirectoryContainer = () => {
	const { loading, data } = useQuery(GET_COLLECTIONS);

	if (loading) return <Spinner />;

	const { collections } = data;
	return <Directory collections={collections} />;
};

export default DirectoryContainer;
