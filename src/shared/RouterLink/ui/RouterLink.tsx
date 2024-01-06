import React, {FC} from 'react'
import {Link as ReactRouterLink, LinkProps} from "react-router-dom";
import {styled} from "@mui/material";

const Link = styled(ReactRouterLink)(() => ({
    textDecoration: 'none',

    '&:hover, &:focus, &:visited': {
        color: 'initial'
    }
}))

export const RouterLink: FC<LinkProps> = ({ children, ...linkProps }) => {
    return <Link {...linkProps}>{children}</Link>
}