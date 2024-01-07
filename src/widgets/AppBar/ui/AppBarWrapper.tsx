import {AppBarProps, styled} from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";

export const AppBarWrapper = styled(MuiAppBar)<AppBarProps>(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    height: 80,
    padding: theme.spacing(0, 2),
}));