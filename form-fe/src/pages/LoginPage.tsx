import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const navigate = useNavigate();

  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      height={"80vh"}
      sx= {{
        flexDirection: {xs: 'column', sm: 'row'},
        gap: 2
      }}
    >
      <Button variant="contained" onClick={()=>navigate('/candidateDetails')}>Login As Admin</Button>
      <Button variant="contained" onClick={()=>navigate('/candidateForm/4f5bedd696b8')}>Login As Candidate</Button>
    </Box>
  );
};

export default LoginPage;
