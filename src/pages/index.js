import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Button } from "@chakra-ui/react";
import { AvatarButton } from "../components/Buttons/AvatarButton";

const Index = () => (
  <Container bg="black" height="100vh">
    <Header>
      <Button>IconDing</Button>
      <AvatarButton name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
    </Header>
    <Hero />
    <Main></Main>

    <Footer></Footer>
  </Container>
);

export default Index;