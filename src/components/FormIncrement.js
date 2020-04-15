import React from "react";
import styled from "styled-components";

class Increment extends React.Component {
  // FUNCTION
  state = {
    number: 1,
  };

  AddItem = () => {
    this.setState({ number: this.state.number + 1 });
  };

  DecreaseItem = () => {
    this.setState({ number: this.state.number - 1 });
    if (this.state.number <= 0) {
      window.alert("TIDAK BISA ANGKA MINUS");
      this.setState({ number: this.state.number - 0 });
    }
  };

  ResetItem = () => {
    this.setState({ number: (this.state.number = 0) });
  };

  // FUNCTION

  // STYLING
  render() {
    const Input = styled.input`
      height: 50px;
      font-size: 20px;
      color: palevioletred;
      text-weight: bold;
      text-align: center;
      margin: 20px;
      outline: palevioletred solid 5px;
    `;

    const Container = styled.div`
      text-align: center;
    `;
    const Button = styled.button`
      background-color: palevioletred;
      color: white;
      font-size: 30px;
      padding: 10px 40px;
    `;

    return (
      <div>
        <Container>
          <Button onClick={this.AddItem}>+</Button>
          <Input value={this.state.number}></Input>
          <Button onClick={this.DecreaseItem}>-</Button>
        </Container>
        
        <Container>
          <Button onClick={this.ResetItem}>Reset</Button>
        </Container>
      </div>
    );
  }
}

// STYLING

export default Increment;
