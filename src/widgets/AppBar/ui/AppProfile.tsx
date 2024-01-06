import React from 'react'
import {MenuButton} from "@mui/base/MenuButton";
import {Avatar, Grid, styled, Typography} from "@mui/material";
import {green} from "@mui/material/colors";
import {Menu} from "@mui/base/Menu";
import {MenuItem} from "@mui/base/MenuItem";
import {Dropdown} from "@mui/base/Dropdown";

const MenuButtonDropdown = styled(MenuButton)(() => ({
    border: 'none',
    width: 40,
    padding: 0,
    backgroundColor: 'transparent',
    borderRadius: '50%',
    cursor: 'pointer',
    outline: 'none',
}))

const DropdownMenu = styled(Menu)(({theme}) => ({
    zIndex: theme.zIndex.drawer + 1,
}))

const DropdownMenuList = styled('ul')(({theme}) => ({
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing(2),
    marginRight: theme.spacing(2),
    borderRadius: 8,
    padding: theme.spacing(2),
    listStyleType: 'none',
    minWidth: 300
}))

const DropdownMenuAvatarName = styled(Typography)(({theme}) => ({
    fontWeight: 600,
    padding: theme.spacing(0, 1)
}))

const DropdownMenuItem = styled(MenuItem)(({theme}) => ({
    borderRadius: 8,
    padding: theme.spacing(1),
    margin: theme.spacing(1, 0),
    cursor: 'pointer',

    '&:hover': {
        backgroundColor: '#EEE',
    }
}))

export const AppProfile = () => {
    return (
        <Dropdown>
            <MenuButtonDropdown>
                <Avatar sx={{bgcolor: green[500]}}>AV</Avatar>
            </MenuButtonDropdown>
            <DropdownMenu slots={{listbox: DropdownMenuList}}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <DropdownMenuAvatarName variant="h6">Artem Vitte</DropdownMenuAvatarName>
                    <Avatar sx={{bgcolor: green[500]}}>AV</Avatar>
                </Grid>
                <DropdownMenuItem>Заказы</DropdownMenuItem>
                <DropdownMenuItem>Профиль</DropdownMenuItem>
                <DropdownMenuItem>Мои адреса</DropdownMenuItem>
            </DropdownMenu>
        </Dropdown>
    )
}