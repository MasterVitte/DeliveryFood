import React from 'react'
import {Grid, Modal, Typography} from "@mui/material"
import {useStore} from "../../../store/StoreProvider"
import {Button} from "../../../shared/Button/ui/Button"

interface Props {
    restaurantId: string | null
    onSuccess?: () => void
}

export const CartClearModal = ({ restaurantId, onSuccess }: Props) => {
    const {clearCartModalShow, closeClearCartModal, clearCart, cart, restaurants} = useStore()

    return (
        <Modal open={clearCartModalShow} onClose={closeClearCartModal}
               style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Grid
                container
                flexDirection="column"
                justifyContent="space-between"
                style={{backgroundColor: '#fff', width: '400px', height: '250px', padding: '16px', borderRadius: '24px'}}
            >
                <Grid container flexDirection="column">
                    <Typography variant="h6" fontWeight={600} flex={1} style={{marginTop: '16px'}}>Оформить заказ из ресторана {restaurants.find(restaurant => restaurant.id === restaurantId)?.name}?</Typography>
                    <Typography style={{marginTop: '16px'}}>Все ранее добавленные блюда из ресторанa {restaurants.find(restaurant => restaurant.id === cart.restaurantId)?.name} будут удалены из корзины</Typography>
                </Grid>
                <Grid container>
                    <Grid item flex={1} style={{paddingRight: '8px'}} container>
                    <Button fullWidth onClick={closeClearCartModal}>Отмена</Button>
                    </Grid>
                    <Grid item flex={1} style={{paddingLeft: '8px'}} container>
                    <Button fullWidth onClick={() => {
                        clearCart()
                        closeClearCartModal()
                        onSuccess?.()
                    }}>
                        Продолжить
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Modal>
    )
}