import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { authentication } from "../features/Auth/authSlice";

const Signup = () => {
  const [input, setInput] = useState({
    userName: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const changeInputhandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authentication(input));
  };
  return (
    <form
      onSubmit={submitHandler}
      className="flex items-center justify-center bg-secondary md:w-2/3 lg:w-1/2 max-w-xl rounded-lg "
    >
      <div className="text-fontPrimary flex flex-col items-center justify-center  w-full gap-3 p-10">
        <TextField
          onChange={changeInputhandler}
          value={input.userName}
          name="userName"
          id="outlined-helperText"
          className="w-full bg-fontPrimary rounded-lg text-fontSecondary"
          label="User Name"
          type="search"
          variant="filled"
        />
        {/* <TextField
          className="w-full bg-fontPrimary rounded-lg text-fontSecondary"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
        /> */}
        <OutlinedInput
          id="outlined-adornment-password"
          value={input.password}
          name="password"
          className="w-full bg-fontPrimary rounded-lg text-fontSecondary"
          type={showPassword ? "text" : "password"}
          onChange={changeInputhandler}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        <Button type="submit" variant="container">
          signup
        </Button>
      </div>
    </form>
  );
};

export default Signup;
