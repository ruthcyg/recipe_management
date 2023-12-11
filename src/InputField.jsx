/* eslint-disable react/prop-types */
import {
	InputFields,
	IngredientLists,
	InstructionsTextareas,
	SavedRecipesListContainer,
	SavedRecipeCard,
} from "./StyleComponent";

export const InputField = ({ label, value, onChange }) => (
	<InputFields>
		<label>{label}:</label>
		<input
			type="text"
			value={value}
			onChange={onChange}
			placeholder="Recipe Name"
		/>
	</InputFields>
);

export const IngredientInput = ({ value, onChange, onAdd, label }) => (
	<>
		<InputFields>
			<label>{label}:</label>
			<input
				label="Ingredient"
				value={value}
				onChange={onChange}
				placeholder="Enter your Ingredient"
			/>
		</InputFields>
		<button onClick={onAdd}>Add Ingredient</button>
	</>
);

export const IngredientList = ({ items, onStartEditing, onDelete }) => (
	<IngredientLists>
		{items.map((item, index) => (
			<li key={index}>
				{item}{" "}
				<span>
					<button onClick={() => onStartEditing(index)}>Edit</button>{" "}
					<button onClick={() => onDelete(index)} className="delete-button">
						Delete
					</button>
				</span>
			</li>
		))}
	</IngredientLists>
);

export const InstructionsTextarea = ({ value, onChange }) => (
	<InstructionsTextareas
		label="Instructions"
		value={value}
		onChange={onChange}
		placeholder="Enter your instructions"
	/>
);

export const SavedRecipesList = ({ recipes, onEdit, onDelete }) => (
	<SavedRecipesListContainer>
		<h3>Saved Recipes:</h3>
		{recipes.map((recipe, index) => (
			<>
				<SavedRecipeCard key={index}>
					<h4>{recipe.name}</h4>
					{recipe.image && <img src={recipe.image} alt="Recipe" />}
					<p>Ingredients: {recipe.ingredients.join(", ")}</p>
					<p>Instructions: {recipe.instructions}</p>
					<button onClick={() => onEdit(index)}>Edit</button>
					<button onClick={() => onDelete(index)}>Delete</button>
				</SavedRecipeCard>
			</>
		))}
	</SavedRecipesListContainer>
);
