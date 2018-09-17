import React, {Component} from  'react'
import {connect} from 'react-redux'

import {fetchProducts} from "../../actions/index";

class Home extends Component
{
    componentDidMount(){
        this.props.fetchProducts()
    }

    render(){
        return(
            <div>
                Home
            </div>
        )
    }
}

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = {
    fetchProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)