import logoImg from '../../assets/rocket.svg'

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="logo todo" />
        <p>to<span>do</span></p>
      </Content>
    </Container>
  );
} 