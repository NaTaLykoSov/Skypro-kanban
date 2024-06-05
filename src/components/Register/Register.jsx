import { Wrapper } from "../../mock/Global.styled" 
import * as S from "./Register.styled"
import { Link } from "react-router-dom"
import { paths } from "../../mock/paths"

const Register = () => {
    return (
        <Wrapper>
        <S.SignUp>
            <S.Modal>
				<S.ModalBlock>
					<S.ModalTtl>
						<h2>Регистрация</h2>
					</S.ModalTtl>
					<S.ModalFormLogin id="formLogUp" action="#">
						<S.ModalInput
						type="text" 
						name="first-name"
						id="first-name"
						placeholder="Имя">
						</S.ModalInput>
						<S.ModalInput
						type="text"
						name="login" 
						id="loginReg" 
						placeholder="Эл. почта">
							</S.ModalInput>
						<S.ModalInput
						type="password" 
						name="password" 
						id="passwordFirst" 
						placeholder="Пароль">
							</S.ModalInput>
							<S.ModalBtnSignUpEnt type="button" id="SignUpEnter" 
							> Зарегистрироваться</S.ModalBtnSignUpEnt>
						<S.ModalFormGroup>
							<p>Уже есть аккаунт? 
								<Link to={paths.LOGIN}>Войдите здесь</Link>
							</p>
						</S.ModalFormGroup>
					</S.ModalFormLogin>
				</S.ModalBlock>
			</S.Modal>
        </S.SignUp>
    </Wrapper>
    )
}
export default Register;