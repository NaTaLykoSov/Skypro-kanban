import { GlobalStyle, Wrapper } from "../mock/Global.styled";
import Login from "../components/Login/Login";

const LoginPage = ( {setAuth} ) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Login setAuth={setAuth} />
      </Wrapper>
    </>
  );
}

export default LoginPage;