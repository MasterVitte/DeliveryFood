import {Box, Button, Grid, styled, Typography} from "@mui/material";
import ItemImg from '../../../shared/images/restaurant1_item1.png'
import {Add} from "@mui/icons-material";

const RestaurantItemWrapper = styled(Grid)(({theme}) => ({
    padding: theme.spacing(2),
    width: '100%',
    backgroundColor: '#eee',
    overflow: 'hidden',
    borderRadius: '24px'
}))

const RestaurantImgWrapper = styled(Box)(() => ({
    height: '160px',
    overflow: 'hidden',
    borderRadius: '24px'
}))

const RestaurantImg = styled('img')(() => ({
    objectFit: 'cover',
    objectPosition: '50% 50%',
    width: '100%',
    height: '100%'
}))

const RestaurantInfoWrapper = styled(Box)(({theme}) => ({
    marginTop: theme.spacing(1)
}))

const RestaurantInfoWtTitle = styled(Typography)(({theme}) => ({
    marginTop: theme.spacing(1.5),
    color: theme.palette.action.disabled
}))

const RestaurantItemButton = styled(Button)(({theme}) => ({
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 12,
    marginTop: theme.spacing(1),

    "&:hover": {
        backgroundColor: theme.palette.background.paper,
    }
}))

export const RestaurantMenuItem = () => {
    return (
        <Grid item container lg={3} md={3} sm={3} xs={3}>
            <RestaurantItemWrapper>
                <RestaurantImgWrapper>
                    <RestaurantImg src={ItemImg}/>
                </RestaurantImgWrapper>
                <RestaurantInfoWrapper>
                    <Typography variant="h6" fontWeight={600}>500р</Typography>
                    <Typography>Хинкали традиционные</Typography>
                    <RestaurantInfoWtTitle>400г</RestaurantInfoWtTitle>
                </RestaurantInfoWrapper>
                <Box>
                    <RestaurantItemButton fullWidth startIcon={<Add />}>Добавить</RestaurantItemButton>
                </Box>
            </RestaurantItemWrapper>
        </Grid>
    )
}