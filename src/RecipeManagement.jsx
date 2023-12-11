import { useState, useEffect } from "react";
import {
	InputField,
	IngredientInput,
	IngredientList,
	InstructionsTextarea,
	SavedRecipesList,
	
} from "./InputField";

import {
	ImageContainer,
	Input,
	SavedRecipesContainer,
	StyledImage,
	InputFields,
} from "./StyleComponent";

const RecipeForm = () => {
	const [recipeData, setRecipeData] = useState({
		name: "",
		ingredient: "",
		ingredientsList: [],
		instructions: "",
		editingIndex: null,
		image: null,
	});

	const [savedRecipes, setSavedRecipes] = useState(() => {
		const storedRecipes = localStorage.getItem("savedRecipes");
		return storedRecipes ? JSON.parse(storedRecipes) : [];
	});

	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		localStorage.setItem("savedRecipes", JSON.stringify(savedRecipes));
	}, [savedRecipes]);

	const handleInputChange =
		(field) =>
		({ target }) => {
			setRecipeData((prevData) => ({ ...prevData, [field]: target.value }));
		};

	const addIngredientToList = () => {
		const { ingredient, ingredientsList, editingIndex } = recipeData;
		if (ingredient.trim() !== "") {
			const updatedList = [...ingredientsList];
			if (editingIndex !== null) {
				updatedList[editingIndex] = ingredient;
				setRecipeData((prevData) => ({
					...prevData,
					ingredientsList: updatedList,
					editingIndex: null,
					ingredient: "",
				}));
			} else {
				setRecipeData((prevData) => ({
					...prevData,
					ingredientsList: [...updatedList, ingredient],
					ingredient: "",
				}));
			}
		}
	};

	const startEditing = (index) => {
		const ingredient = recipeData.ingredientsList[index];
		setRecipeData((prevData) => ({
			...prevData,
			ingredient,
			editingIndex: index,
		}));
	};

	const cancelEditingIngredients = () => {
		setRecipeData((prevData) => ({
			...prevData,
			ingredient: "",
			editingIndex: null,
		}));
	};

	const cancelEditing = () => {
		setRecipeData({
			name: "",
			ingredient: "",
			ingredientsList: [],
			instructions: "",
			editingIndex: null,
			image: null,
		});
	};

	const deleteIngredient = (index) => {
		const updatedList = [...recipeData.ingredientsList];
		updatedList.splice(index, 1);
		setRecipeData((prevData) => ({
			...prevData,
			ingredientsList: updatedList,
			editingIndex: null,
		}));
	};

	const handleImageChange = (event) => {
		setRecipeData((prevData) => ({
			...prevData,
			image: event.target.files[0],
		}));
	};

	const saveRecipe = () => {
		const { name, ingredientsList, instructions, editingIndex, image } =
			recipeData;
		if (ingredientsList.length === 0) {
			alert("Please add at least one ingredient before saving the recipe.");
			return;
		}
		if (name.trim() !== "") {
			const savedRecipeData = {
				name,
				ingredients: ingredientsList,
				instructions,
				image: image instanceof File ? URL.createObjectURL(image) : null,
			};

			const updatedRecipes =
				editingIndex !== null
					? savedRecipes.map((recipe, index) =>
							index === editingIndex ? savedRecipeData : recipe
					  )
					: [...savedRecipes, savedRecipeData];

			setSavedRecipes(updatedRecipes);

			setRecipeData({
				name: "",
				ingredient: "",
				ingredientsList: [],
				instructions: "",
				editingIndex: null,
				image: null,
			});
		}
	};

	const editSavedRecipe = (index) => {
		const savedRecipeToEdit = savedRecipes[index];
		setRecipeData({
			name: savedRecipeToEdit.name,
			ingredient: "",
			ingredientsList: savedRecipeToEdit.ingredients,
			instructions: savedRecipeToEdit.instructions,
			editingIndex: index,
			image: savedRecipeToEdit.image,
		});
	};

	const deleteSavedRecipe = (index) => {
		const updatedRecipes = [...savedRecipes];
		updatedRecipes.splice(index, 1);
		setSavedRecipes(updatedRecipes);
	};

	// Filter recipes based on the search query
	const filteredRecipes = savedRecipes.filter((recipe) =>
		recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return (
		<>
			<h2>Recipe Form</h2>

			<SavedRecipesContainer>
				<div>
					<Input
						type="text"
						value={searchQuery}
						onChange={(e) => setSearchQuery(e.target.value)}
						placeholder="Enter Search"
					/>
				</div>
				{/* Render the filtered recipes */}
				<SavedRecipesList
					recipes={filteredRecipes}
					onEdit={editSavedRecipe}
					onDelete={deleteSavedRecipe}
				/>
			</SavedRecipesContainer>

			<h1>ADD YOUR RECIPES</h1>
			<InputField
				label="Recipe Name"
				value={recipeData.name}
				onChange={handleInputChange("name")}
			/>
			<IngredientInput
				label="Ingredients"
				value={recipeData.ingredient}
				onChange={handleInputChange("ingredient")}
				onAdd={addIngredientToList}
			/>
			{recipeData.editingIndex !== null && (
				<>
					<button onClick={cancelEditingIngredients} className="cancel-button">
						Cancel
					</button>
					<button onClick={addIngredientToList}>Update</button>
				</>
			)}
			<IngredientList
				items={recipeData.ingredientsList}
				onStartEditing={startEditing}
				onDelete={deleteIngredient}
			/>
			<InstructionsTextarea
				value={recipeData.instructions}
				onChange={handleInputChange("instructions")}
			/>
			<InputFields>
				<label>Image:</label>
				<input type="file" accept="image/*" onChange={handleImageChange} />
				{recipeData.image && (
					<ImageContainer>
						<StyledImage
							src={
								recipeData.image instanceof File
									? URL.createObjectURL(recipeData.image)
									: recipeData.image
							}
							alt="Recipe"
						/>
					</ImageContainer>
				)}
			</InputFields>

			<button onClick={saveRecipe} className="save-button">
				Save Recipe
			</button>
			<button onClick={cancelEditing} className="cancel-button">
				Cancel
			</button>

			
		</>
	);
};

export default RecipeForm;
