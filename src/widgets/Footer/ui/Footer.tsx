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
    display: 'flex',
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2),
    borderRadius: 24
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
                <Grid item flex={1} container alignItems="center">
                    <Typography>2023 - {new Date().getFullYear()} "ООО Деливери Фуд"</Typography>
                </Grid>
                <Grid item container flex={1} alignItems="center" justifyContent="flex-end">
                    <FooterGithubLink target="blank" href="https://github.com/MasterVitte/DeliveryFood">
                        <Typography>MasterVitte</Typography>
                        <GitHub style={{marginLeft: 8}}/>
                    </FooterGithubLink>
                </Grid>
            </Grid>
        </FooterWrapper>
    )
}