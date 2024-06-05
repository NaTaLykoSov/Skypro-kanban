import { Wrapper } from "../../mock/Global.styled" 
import * as S from "./Login.styled"
import { Link, useNavigate } from "react-router-dom"
import { paths } from "../../mock/paths"

const Login = ( {setAuth} ) => {
	const navigate = useNavigate();
	const onLogin = (e) => {
		e.preventDefault();
	setAuth(true);
		navigate (paths.MAIN);
	}
return (
    <Wrapper>
        <S.SignIn>
            <S.Modal>
				<S.ModalBlock>
					<S.ModalTtl>
						<h2>Вход</h2>
					</S.ModalTtl>
					<S.ModalFormLogin id="formLogIn" action="#">
						<S.ModalInput 
						type="text" 
						name="login" 
						id="formlogin" 
						placeholder="Эл. почта">
							</S.ModalInput>
						<S.ModalInput
						type="password" 
						name="password" 
						id="formpassword" 
						placeholder="Пароль">
							</S.ModalInput>
						<S.ModalBtnEnter type="button" 
							id="btnEnter" onClick={onLogin}>Войти</S.ModalBtnEnter>
						<S.ModalFormGroup>
							<p>Нужно зарегистрироваться?</p>
							<Link to={paths.REGISTER}>Регистрируйтесь здесь</Link>
						</S.ModalFormGroup>
					</S.ModalFormLogin>
				</S.ModalBlock>
            </S.Modal>
        </S.SignIn>
    </Wrapper>
)
}
export default Login;