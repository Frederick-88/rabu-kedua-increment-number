import React from 'react';
import logo from '../logo.svg';
import styled from 'styled-components'

class Increment extends React.Component{
    render(){
        const Container = styled.div `text-align:center`
        const Image = styled.img `@media (prefers-reduced-motion: no-preference) {
              animation: App-logo-spin infinite 15s linear;
              width: 500px;
            }
          }
          @keyframes App-logo-spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }`
        return (
            <Container>
            <Image src={logo} alt="logo" />
            "tes"
        </Container>
      )

    }
}

export default Increment;
