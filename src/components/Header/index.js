import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { Container, Cart } from './styles';
import { connect } from 'react-redux';

import Logo from './../../assets/images/logo.svg';

function Header({ cartSize }) {
    return (
        <Container>
            <Link to="/">
                <img src={Logo} alt="Logo" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu Carrinho</strong>
                    <span>{cartSize}</span>
                </div>
                <MdShoppingBasket size={36} color="#FFF" />
            </Cart>
        </Container>
    );
}

export default connect(state => ({
    cartSize: state.cart.length,
}))(Header);
