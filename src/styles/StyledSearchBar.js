import styled from 'styled-components';

export const StyledSearchBarContent = styled.div`
  input {
    background-size: 30px 30px;
    background-image: url('https://d30y9cdsu7xlg0.cloudfront.net/png/14173-200.png');
    background-position: 15px 8px;
    background-repeat: no-repeat;
    -webkit-transition: width 0.4s ease-in-out;
    transition: width 0.4s ease-in-out;

    :focus {
      width: 80%;
      border-color: #889ebb;
    }

    @media (min-width: 640px) {
      :focus {
        width: ${props => props.extendedSize};
      }
    }
  }
`;
