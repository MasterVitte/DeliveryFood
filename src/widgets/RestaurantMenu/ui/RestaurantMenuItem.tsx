import {Box, Button, Grid, styled, Typography} from "@mui/material"
import {Add} from "@mui/icons-material"
import {useStore} from "../../../store/StoreProvider"
import {MenuItem} from "../../../entities/Resturant/model"
import React, {useCallback} from "react";
import {CartItemControls} from "../../../shared/CartItemControls/CartItemControls";
import {useCartItemFetch} from "../lib/useCartItemFetch";
import {CartClearModal} from "../../CartClearModal/ui/CartClearModal";

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
    textTransform: 'none',

    "&:hover": {
        backgroundColor: theme.palette.background.paper,
    }
}))

type Props = MenuItem & { restaurantId: string }

export const RestaurantMenuItem = ({restaurantId, id, name, image, price, weight}: Props) => {
    const {addToCard, cart, openClearCartModal} = useStore()
    const { cartItem } = useCartItemFetch(id)
    
    const onSelect = useCallback(() => {
        addToCard({restaurantId, menuItemId: id})
    }, [addToCard, id, restaurantId])

    const addedInCart = !!cartItem

    return (
        <Grid item container lg={3} md={3} sm={3} xs={3}>
            <RestaurantItemWrapper>
                <RestaurantImgWrapper>
                    <RestaurantImg src={image}/>
                </RestaurantImgWrapper>
                <RestaurantInfoWrapper>
                    <Typography variant="h6" fontWeight={600}>{price}₽</Typography>
                    <Typography>{name}</Typography>
                    <RestaurantInfoWtTitle>{weight}г</RestaurantInfoWtTitle>
                </RestaurantInfoWrapper>
                <Box component="div" style={{marginTop: '8px'}}>
                    {addedInCart ? (
                            <CartItemControls restaurantId={restaurantId} id={id} count={cartItem?.count}/>
                        ) :
                        <RestaurantItemButton
                            fullWidth
                            startIcon={<Add/>}
                            onClick={() => {
                                if (cart.restaurantId && restaurantId !== cart.restaurantId) {
                                    openClearCartModal()
                                } else {
                                    onSelect()
                                }
                            }}
                        >
                            Добавить
                        </RestaurantItemButton>
                    }
                </Box>
            </RestaurantItemWrapper>
            <CartClearModal restaurantId={restaurantId} onSuccess={onSelect} />
        </Grid>
    )
}