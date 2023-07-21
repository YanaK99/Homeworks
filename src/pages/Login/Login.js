import { CardWrapper, MainCard } from "./styled";

import { Input } from "../../components/Input";
import { Title } from "../../components/Title";

/**
 *
 * @param root0
 * @param root0.setIsAuthorized
 * @param root0.isAuthorized
 */
function Login({ setIsAuthorized }) {
    return (
        <div>
            <MainCard>
                <CardWrapper>
                    <div className="card_content">
                        <Title />
                        <Input setIsAuthorized={setIsAuthorized} />
                    </div>
                </CardWrapper>
            </MainCard>
        </div>
    );
}

export default Login;
