import styled from "styled-components";
import recipeImage from "./recipeimage.jpeg";

export const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;
	width: 100px;
	height: 100px;
	overflow: hidden;
	border-radius: 50%;
	border: 2px solid #fff;
	margin-bottom: 20px;
`;

export const StyledImage = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	border-radius: 50%;
`;
export const StyledAppLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	/*grid-template-columns: 26rem 1fr;*/
	grid-template-rows: auto 1fr;
	height: 100vh;
`;






export const Main = styled.main`
	background-color: RGB(250, 128, 114);
	padding: 4rem 4.8rem 6.4rem;
	//background-image: url(${recipeImage});
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
`;




export const SavedRecipesContainer = styled.div`
	margin-top: 20px;
	display: grid;
	grid-template-columns: 1fr;
	grid-gap: 20px;
`;





//file name change
export const Input = styled.input`
	border: 1px solid #4b5563;
	background-color: #ffff;
	border-radius: 0 1px 2px ;
	padding: 0.8rem 1.2rem;
	//box-shadow: #eef2f;
	width: 100%;
`;


export const InputFields = styled.div`
	margin-bottom: 15px;

	label {
		display: block;
		margin-bottom: 5px;
		font-weight: bold;
	}

	input {
		width: 100%;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
	}
`;

export const IngredientInputs = styled.div`
	margin-bottom: 15px;

	input {
		width: 70%;
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
		margin-right: 5px;
	}

	/* button {
		padding: 8px;
		//background-color: #4caf50;
		background-color: #ff6666;
		color: red;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	} */
`;

export const IngredientLists = styled.ul`
	list-style: none;
	padding: 0;

	li {
		margin-bottom: 5px;

		button {
			margin-left: 5px;
			padding: 5px;
			background-color: #ff6666;
			color: #fff;
			border: none;
			border-radius: 4px;
			cursor: pointer;
		}
	}
`;

export const InstructionsTextareas = styled.textarea`
	width: 100%;
	padding: 8px;
	border: 1px solid #ccc;
	border-radius: 4px;
	margin-bottom: 15px;
`;

export const SavedRecipesListContainer = styled.div`
	h3 {
		margin-bottom: 10px;
	}
`;

export const SavedRecipeCard = styled.div`
	background: #fff;
	border-radius: 7px;
	box-shadow: 0 2px 5px #ccc;
	padding: 10px;
	width: 240px;
	margin: 16px;
	float: left;
	margin-bottom: 20px;

	h4 {
		margin-bottom: 5px;
	}

	p {
		margin-bottom: 10px;
	}

	img {
		width: 100px;
		height: 100px;
		object-fit: cover;
		border-radius: 50%;
	}

	button {
		margin-right: 5px;
		padding: 8px;
		background-color: #4caf50;
		color: #fff;
		border: none;
		border-radius: 4px;
		cursor: pointer;
	}
`;
