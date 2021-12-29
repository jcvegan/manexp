import { Box,styled } from "@mui/system";

const Container = styled(Box)(({ theme, open }) => ({
    display:'flex',
    flexGrow:'1',
    height: '100vh',
    overflow:'auto',
    justifyContent:'center',
    alignItems:'center'
        //'background': theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.pallete.grey[900]
}),
);

export default Container;