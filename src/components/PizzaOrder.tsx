import React, { FC, FunctionComponentFactory, useRef, useState } from 'react';
import { OrderList } from './OrderList';

interface PizzaOrderProps {
	size: string;
	changeSize: (event: React.ChangeEvent<HTMLInputElement>) => void;
	changeTopping: (event: React.ChangeEvent<HTMLSelectElement>) => void;
	changeGluten: VoidFunction;
	changeSpecial: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
	addOrder: VoidFunction;
}

export const PizzaOrder: FC<PizzaOrderProps> = ({
	size,
	changeSize,
	changeTopping,
	changeGluten,
	changeSpecial,
	addOrder,
}) => {
	return (
		<div className="pizzaOrder">
			<h1>Order Your Pizza</h1>
			<div className="sizeSelect">
				<div>Size</div>
				<div>
					<input
						type="radio"
						value="small"
						checked={size === 'small'}
						onChange={changeSize}
						name="size"
						id="small"
					/>
					<label htmlFor="small">Small</label>
					<input
						type="radio"
						value="medium"
						checked={size === 'medium'}
						onChange={changeSize}
						name="size"
						id="medium"
					/>
					<label htmlFor="medium">Medium</label>
					<input
						type="radio"
						value="large"
						checked={size === 'large'}
						onChange={changeSize}
						name="size"
						id="large"
					/>
					<label htmlFor="large">Large</label>
				</div>
			</div>
			<div className="toppingSelect">
				<label htmlFor="topping">Topping</label>
				<div>
					<select onChange={changeTopping} name="topping" id="topping">
						<option value="none">None</option>
						<option value="pepperoni">Pepperoni</option>
						<option value="cheese">Cheese</option>
						<option value="jalapeno">Jalapeno</option>
					</select>
				</div>
			</div>
			<div className="glutenSelect">
				<input
					type="checkbox"
					onChange={changeGluten}
					name="gluten"
					id="glutenFree"
				/>
				<label htmlFor="glutenFree">Gluten free</label>
			</div>
			<div className="specialSelect">
				<label htmlFor="specialInstructions">Special instructions:</label>
				<div>
					<textarea
						onChange={changeSpecial}
						name="special"
						id="specialInstructions"
					></textarea>
				</div>
			</div>
			<button onClick={addOrder}>Send Order</button>
		</div>
	);
};
