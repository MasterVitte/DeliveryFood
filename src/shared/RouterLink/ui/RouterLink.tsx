import React, {FC} from 'react'
import {Link, LinkProps} from "react-router-dom";

export const RouterLink: FC<LinkProps> = ({ children, ...linkProps }) => {
    return <Link {...linkProps}>{children}</Link>
}