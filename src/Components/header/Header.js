import React, { Component } from 'react';

import HeaderList from './headerList/HeaderList';

import sprite from '../../icons/header/symbol-defs.svg';
import { HeaderContainer } from './HeaderStyled';

import Modal from '../modal/Modal';

class Header extends Component {
  state = {
    width: window.innerWidth,
    breakPoint: 767,
    isModalOpen: false,
  };

  componentDidMount() {
    window.addEventListener('resize', this.handleResizeWindow);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResizeWindow);
  }

  handleResizeWindow = () => {
    if (this.state.width > 768) {
      this.setState({
        width: window.innerWidth,
        isModalOpen: false,
      });
      return;
    }

    this.setState({
      width: window.innerWidth,
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({ isModalOpen: !prevState.isModalOpen }));
  };

  render() {
    return (
      <HeaderContainer>
        <svg className="headerIcon">
          <use href={sprite + '#icon-home'} />
        </svg>
        {this.state.breakPoint > this.state.width ? (
          <svg className="headerIcon" onClick={this.toggleModal}>
            <use href={sprite + '#icon-menu'} />
          </svg>
        ) : (
          <HeaderList data={this.props.data} />
        )}
        {this.state.isModalOpen && this.state.width < 768 && (
          <Modal closeModal={this.toggleModal}>
            <HeaderList data={this.props.data} />
          </Modal>
        )}
      </HeaderContainer>
    );
  }
}

export default Header;
