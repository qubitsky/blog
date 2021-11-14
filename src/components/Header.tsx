/** @jsx jsx */
import { jsx, Container } from "theme-ui";
import { Link, withPrefix } from "gatsby";
import MenuList from "./MenuList";

const Header = () => {
  return (
    <header
      sx={{
        height: 96,
        backgroundColor: "muted",
      }}
    >
      <Container
        sx={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          to="/"
          sx={{
            width: 129,
            height: 62,
            backgroundImage: `url(${withPrefix("/assets/logo2.png")})`,
            backgroundSize: "contain",
          }}
        ></Link>
        <MenuList />
      </Container>
    </header>
  );
};

export default Header;
