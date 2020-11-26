import React from "react";
import Button from "../../components/Button/Button";
import LoginInput from "../../components/LoginInput/LoginInput";
import { Container, StyledSupport } from "../Login/StyledLogin";
import { ButtonsContainer } from "../Support/Payments/StyledPayments";
const Login = () =>
{
    return(
    <StyledSupport>
        <Container>
            <LoginInput labelContent ="Login"/>
            <LoginInput labelContent ="Hasło"/>
            <ButtonsContainer>
                <p><a href="#">Zapomniałeś hasła?</a></p>
                <Button title = "Zaloguj"/>
            </ButtonsContainer>
        </Container>
    </StyledSupport>
    );
};

export default Login;