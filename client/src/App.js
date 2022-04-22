import React from "react";
import Home from "./components/Home";
import { Layout, Image, Typography } from "antd";
import styles from "./styles";
import Logo from "./images/SociaLite.png";

const { Title } = Typography;
const { Header, Footer } = Layout;

const App = () => {
  return (
    <Layout style={styles.layout}>
      <Header style={styles.header}>
        <Image style={styles.image} preview={false} src={Logo} width={45} />
        &nbsp;
        <Title style={styles.title}>SociaLite</Title>
      </Header>
      <Home />
      <Footer style={styles.footer}>&copy; 2022 SociaLite</Footer>
    </Layout>
  );
};

export default App;