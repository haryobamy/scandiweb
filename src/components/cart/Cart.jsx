import React, { Component } from 'react'
import { CartContainer, CartTable, CartWrapper, Title } from './CartElement'

export class Cart extends Component {
    render() {
        return (
            <CartContainer>
                <CartWrapper>
                    <Title>Your Products</Title>
                    <CartTable>
                        <tr>
                            <th>Customer</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>

                        </tr>
                    </CartTable>
                </CartWrapper>
            </CartContainer>
        )
    }
}

export default Cart
