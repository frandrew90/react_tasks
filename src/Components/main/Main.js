import React, { Component } from "react";
import data from "../../data";
import AdvForm from "../admin/AdvForm";
import CartList from "../cart/CartList";
import LaptopList from "../laptopList/LaptopList";
import PhoneList from "../phoneList/PhoneList";
import Section from "../section/Section";
import { MainContainer } from "./MainStyled";

class Main extends Component {
  state = {
    cart: [],
    ...data,
  };

  addNewAdv = (category, product) => {
    this.setState(prevState=> ({[category]: [...prevState[category], product]}));
  };

  addToCart = (product) =>
    this.setState((prev) => ({ cart: [...prev.cart, product] }));
  removeFromCart = (id) =>
    this.setState((prev) => ({
      cart: [...prev.cart.filter((product) => product.id !== id)],
    }));
  removeAllFromCart = () => this.setState({ cart: [] });
  render() {
    return (
      <MainContainer>
        <Section title='Добавление нового объявления'>
          <AdvForm addNewAdv={this.addNewAdv}/>
        </Section>
        <Section title='Корзина'>
          <CartList
            cart={this.state.cart}
            removeFromCart={this.removeFromCart}
            removeAllFromCart={this.removeAllFromCart}
          />
        </Section>
        <Section title='Мобильные телефоны'>
          <PhoneList phones={this.state.phones} addToCart={this.addToCart} />
        </Section>
        <Section title='Ноутбуки'>
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
