import React, { FC, useRef, useState } from 'react';
interface OrderProps {
	size: string;
	topping: string;
	glutenFree: boolean;
	specialInstructions: string;
}

export const Order: FC<OrderProps> = ({
	size,
	topping,
	glutenFree,
	specialInstructions,
}) => {
	return (
		<li>
			Size: {size} <br />
			Topping: {topping} <br /> Gluten Free: {glutenFree} <br /> Special
			Instructions: {specialInstructions}
		</li>
	);
};
