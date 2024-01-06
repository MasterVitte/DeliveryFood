import {Divider, Grid, styled, Typography} from "@mui/material";
import {GitHub} from "@mui/icons-material";
import {AppLogo} from "../../AppBar/ui/AppLogo";

const FooterWrapper = styled(Grid)(({theme}) => ({
    backgroundColor: theme.palette.action.hover,
    padding: theme.spacing(4, 3)
}))

const FooterDivider = styled(Divider)(() => ({
    width: '100%'
}))


const FooterDividerWrapper = styled(Grid)(({theme}) => ({
    padding: theme.spacing(2, 0)
}))

const FooterGithubLink = styled('a')(({theme}) => ({
    marginLeft: theme.spacing(1),
    display: 'inline-flex'
}))

export const Footer = () => {
    return (
        <FooterWrapper container>
            <Grid container>
                <AppLogo/>
            </Grid>
            <FooterDividerWrapper container item>
                <FooterDivider/>
            </FooterDividerWrapper>
            <Grid container justifyContent="space-between" wrap="nowrap">
                <Grid item flex={1}>
                    <Typography>2024 - {new Date().getFullYear()} "ООО Деливери Фуд"</Typography>
                </Grid>
                <Grid item container flex={1} alignItems="center" justifyContent="flex-end">
                    <Typography>MasterVitte</Typography>
                    <FooterGithubLink target="blank" href="https://github.com/MasterVitte/DeliveryFood"><GitHub/></FooterGithubLink>
                </Grid>
            </Grid>
        </FooterWrapper>
    )
}