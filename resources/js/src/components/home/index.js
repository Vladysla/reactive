import React, {Component} from  'react'
import {connect} from 'react-redux'

import {
    fetchProducts,
    fetchCategories,
    fetchUsers
} from "../../actions/index";

import Loading from '../loading'

class Home extends Component
{
    componentDidMount(){
        this.props.fetchProducts()
        this.props.fetchCategories()
        this.props.fetchUsers()
    }

    render(){
        const {products, categories} = this.props
        return(
            <div>
                { (products.length < 0 && categories.length < 0) ? <Loading/> : <div>Home</div> }
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = {
    fetchProducts,
    fetchCategories,
    fetchUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)