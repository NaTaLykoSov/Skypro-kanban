import { GlobalStyle, Wrapper } from "../mock/Global.styled";
import Register from "../components/Register/Register";

const RegisterPage = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Register />
      </Wrapper>
    </>
  );
}

export default RegisterPage;