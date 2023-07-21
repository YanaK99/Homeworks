import { useNavigate } from "react-router-dom";

import {
    Button,
    FormContent,
    FormField,
    MainInputField,
    NameLabel,
    PassField,
    PassLabel

} from "./styled";

/**
 *
 * @param root0
 * @param root0.setIsAuthorized
 */
function Input({ setIsAuthorized }) {
    const navigate = useNavigate();
    const login = () => {
        localStorage.setItem("user", true);
        setIsAuthorized(true);
        navigate("/");
    };
  return <MainInputField>
            <FormContent>
                <NameLabel htmlFor="">
                    Name
                </NameLabel>
                <FormField type="text" id="name" name="name" />
                <PassLabel className="pass_label" htmlFor="">
                    Password
                </PassLabel>
                <PassField type="password" id="password" name="password" />
                <Button onClick={login}>Login
                </Button>
            </FormContent>
         </MainInputField>;
}

export default Input;
