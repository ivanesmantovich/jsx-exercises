import React, { FC, useRef, useState } from 'react';

interface OrderListProps {
    orders: string[]
}

export const OrderList: FC<OrderListProps> = ({orders}) => {
	return <ol className='orderList'>
        {orders.map(order => (<li> {order}</li>))}
    </ol>
};
