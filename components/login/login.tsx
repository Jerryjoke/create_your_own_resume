import TextField from "@mui/material/TextField";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { LoginAndSign } from "../../models/login";
interface LoginProps {
    signup: Function
    apiCall: Function
}
const LoginComPonent: React.FC<LoginProps> = (props) => {
  const {signup, apiCall} = props;
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  //   function
  const handleEmailChange = (event: any) => {
    const value = event.target.value;
    setEmail(value);
    setError(!validateEmail(value));
  };

  const validateEmail = (email: any) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const apiCallFunc = () => {
    let temp = new LoginAndSign()
    temp.email = email
    temp.password = password
    apiCall(temp,"login")
  }
 

  return (
    <div className="flex justify-center items-center  bg-[#5f4dee]">
      <div className="h-screen w-full flex flex-col justify-center items-center">
        <div className="text-white font-bold text-3xl">Log In</div>
        <div className="text-white font-normal sm:text-xs md:text-base mt-2 text-center">
          You don't have an account? Then please <span className="underline" onClick={()=>{signup()}}>Sign Up</span> 
        </div>
        <div className="bg-gray-200 flex flex-col sm:w-[100%] md:w-1/2 lg:w-1/3 my-4 rounded-md p-8">
          <TextField
            placeholder="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={error}
            helperText={error ? "Invalid email" : ""}
            sx={{
              backgroundColor: "white",
              marginBottom: "12px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: error ? "red" : "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  border: "1px solid transparent",
                },
              },
            }}
          />
          <TextField
            placeholder="Password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
            InputProps={{
              endAdornment: (
                <IconButton onClick={handleTogglePassword} edge="end">
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>
              ),
            }}
            sx={{
              backgroundColor: "white",
              marginBottom: "12px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "transparent",
                },
                "&:hover fieldset": {
                  borderColor: "transparent",
                },
                "&.Mui-focused fieldset": {
                  border: "1px solid transparent",
                },
              },
            }}
          />
          <div className="text-white font-bold text-md text-center my-2 py-4 bg-[#5f4dee] rounded-full" onClick={()=>{apiCallFunc()}} >
            LOG IN
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComPonent;
