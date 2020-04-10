import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-masculino/12/COL-7070-012/COL-7070-012_zoom2.jpg?ts=1584624042&ims=326x"
                    alt="tenis"
                />

                <strong>Tenis legal</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-masculino/12/COL-7070-012/COL-7070-012_zoom2.jpg?ts=1584624042&ims=326x"
                    alt="tenis"
                />

                <strong>Tenis legal</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-masculino/12/COL-7070-012/COL-7070-012_zoom2.jpg?ts=1584624042&ims=326x"
                    alt="tenis"
                />

                <strong>Tenis legal</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-masculino/12/COL-7070-012/COL-7070-012_zoom2.jpg?ts=1584624042&ims=326x"
                    alt="tenis"
                />

                <strong>Tenis legal</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>

            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/tenis-adidas-lite-racer-cln-masculino/12/COL-7070-012/COL-7070-012_zoom2.jpg?ts=1584624042&ims=326x"
                    alt="tenis"
                />

                <strong>Tenis legal</strong>
                <span>R$ 129,90</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" />
                    </div>
                    <span>Adicionar ao carrinho</span>
                </button>
            </li>
        </ProductList>
    );
}
