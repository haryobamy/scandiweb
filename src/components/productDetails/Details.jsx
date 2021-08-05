import React, { Component } from 'react'
import { AddButton, Color, ColorChoose, DetailsContainer, LeftDetails, ProductColor, ProductConfiguration, ProductDesc, ProductPrice, ProductWrapper, RightDetails } from './DetailsElement'
import choc from '../../images/choc.jpg'

export class Details extends Component {
    render() {
        return (
            <DetailsContainer>
                <ProductWrapper>
                    <LeftDetails>
                        <img src={choc} alt="" />
                    </LeftDetails>
                    <RightDetails>
                        <ProductDesc>
                            <span>product name</span>
                            <h1>Beats EP</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, ut!</p>
                        </ProductDesc>
                        <ProductConfiguration>
                            <ProductColor>
                                <span>Color</span>
                                <ColorChoose>
                                    <Color
                                    >
                                        <input data-image="red" type="radio" id="red" name="color" value="red" checked />
                                        <label for="red"><span></span></label>
                                    </Color>
                                    <Color>
                                        <input data-image="blue" type="radio" id="blue" name="color" value="blue" />
                                        <label for="blue"><span></span></label>
                                    </Color>
                                    <Color>
                                        <input data-image="black" type="radio" id="black" name="color" value="black" />
                                        <label for="black"><span></span></label>
                                    </Color>

                                </ColorChoose>
                            </ProductColor>
                        </ProductConfiguration>
                        <ProductPrice>
                            <span>$ 670</span>
                            <AddButton>Add To Cart</AddButton>
                        </ProductPrice>
                    </RightDetails>
                </ProductWrapper>
            </DetailsContainer >
        )
    }
}

export default Details
