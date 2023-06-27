import { useState } from "react";
import LoginComPonent from "../../components/login/login";
import SignUp from "../../components/login/signup";
import { LoginAndSign } from "../../models/login";
import { LoginAndSignupServices } from "../../serivices/login_and_signup/login_and_signup";
import { useRouter } from "next/router";

interface LoginProps {}
const Login: React.FC<LoginProps> = () => {
  const [signOrLogin, setSignOrLogin] = useState<boolean>(false);
  const router = useRouter();

  // function
  const singupOrLogin = () => {
    setSignOrLogin(!signOrLogin);
  };

  const apiCall = (data: LoginAndSign, type: string) => {
    if (type == "login") {
      login(data);
    } else {
      signup(data);
    }
  };

  // service
  const login = async (body: LoginAndSign) => {
    router.push(`/landing` )
    let result = await LoginAndSignupServices.shared.logIn(body);
    if (result != null) {
    }
  };

  const signup = async (body: LoginAndSign) => {
    let result = await LoginAndSignupServices.shared.signUp(body);
    if (result != null) {
    }
  };

  return (
    <div>
      {signOrLogin ? (
        <SignUp login={singupOrLogin} apiCall={apiCall} />
      ) : (
        <LoginComPonent signup={singupOrLogin} apiCall={apiCall} />
      )}
    </div>
  );
};

export default Login;
