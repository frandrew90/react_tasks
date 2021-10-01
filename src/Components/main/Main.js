import React, { Component } from 'react';
// import data from '../../data';
import { createNewAdv, getProductsByCategory } from '../../servises/API';
import AdvForm from '../admin/AdvForm';
import CartList from '../cart/CartList';
import LaptopList from '../laptopList/LaptopList';
import PhoneList from '../phoneList/PhoneList';
import Section from '../section/Section';
import { MainContainer } from './MainStyled';
// import { getProductsByCategory } from '../../servises/API';

class Main extends Component {
  state = {
    cart: [],
    phones: [],
    laptops: [],
  };

  componentDidMount() {
    getProductsByCategory('phones').then(
      phones => phones && this.setState({ phones }),
    );
    // console.log(phones);
    getProductsByCategory('laptops').then(
      laptops => laptops && this.setState({ laptops }),
    );
    // console.log(laptops);
  }

  addNewAdv = async product => {
    try {
      const id = await createNewAdv(product);

      this.setState(prevState => ({
        [product.category]: [
          ...prevState[product.category],
          { ...product, id },
        ],
      }));
    } catch (error) {}
  };

  addToCart = product =>
    this.setState(prev => ({ cart: [...prev.cart, product] }));
  removeFromCart = id =>
    this.setState(prev => ({
      cart: [...prev.cart.filter(product => product.id !== id)],
    }));
  removeAllFromCart = () => this.setState({ cart: [] });
  render() {
    return (
      <MainContainer>
        <Section title="Добавление нового объявления">
          <AdvForm addNewAdv={this.addNewAdv} />
        </Section>
        <Section title="Корзина">
          <CartList
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            removeAllFromCart={this.removeAllFromCart}
          />
        </Section>
        <Section title="Мобильные телефоны">
          <PhoneList phones={this.state.phones} addToCart={this.addToCart} />
        </Section>
        <Section title="Ноутбуки">
          <LaptopList laptops={this.state.laptops} addToCart={this.addToCart} />
        </Section>
      </MainContainer>
    );
  }
}

export default Main;

// const setState = (func) => {
//   const state = {
//     cart: []
//   }
//   func(state)
// }

//  setState((fdfdsfdsdsffdsfsdfsdds)=>({cart: [...fdfdsfdsdsffdsfsdfsdds.cart, {name: "fghjk"} ]}));
