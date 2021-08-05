import React, { Component } from 'react'
import { ProductButton, ProductCard, ProductDesc, ProductHeading, ProductInfo, ProductImg, ProductPrice, ProductsContainer, ProductTitle, ProductWrapper } from './ProductsElement'
// import { useCart } from 'react-use-cart'


class Products extends Component {
    state = {

    }
    render() {
        return (
            <>
                <ProductsContainer>
                    <ProductHeading>our market</ProductHeading>
                    <ProductWrapper>
                        {this.props.data.map((item, index) => {
                            return <ProductCard key={index}>
                                <ProductImg src={item.img} alt={item.alt} />
                                <ProductInfo>
                                    <ProductTitle>{item.name}</ProductTitle>
                                    <ProductDesc>{item.desc} </ProductDesc>
                                    <ProductPrice> ₦{item.price} </ProductPrice>
                                    <ProductButton  > {item.button} </ProductButton>
                                </ProductInfo>
                            </ProductCard>

                        }
                        )}
                    </ProductWrapper>
                </ProductsContainer>
            </>
        );
    }
}

export default Products;
// const Products = ({ }) => {
//     // const { addItem } = useCart();
//     // const [selected, setSelected] = React.useState(false)



//     return (

//     )
// }

// export default Products
