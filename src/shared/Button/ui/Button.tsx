import React, {PropsWithChildren} from 'react'
import {Button as MaterialButton, ButtonProps, styled} from "@mui/material";
import {green} from "@mui/material/colors";

const CartButton = styled(MaterialButton)(({theme}) => ({
    backgroundColor: green[500],
    padding: theme.spacing(0, 2),
    color: theme.palette.background.paper,
    height: 50,
    borderRadius: 12,
    textTransform: 'none',

    '&:hover': {
        backgroundColor: theme.palette.text.primary,
    }
}))

export const Button: React.FC<PropsWithChildren & ButtonProps> = ({children, ...buttonProps}) => {
    return (
        <CartButton {...buttonProps}>
            {children}
        </CartButton>
    )
}