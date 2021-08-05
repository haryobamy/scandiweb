import React, { Component } from 'react'
import { Products } from '../../components'
import { ProductData } from '../../components/product/data'

export class Home extends Component {
    render() {
        return (
            <div>
                <Products data={ProductData} />
            </div>
        )
    }
}

export default Home
