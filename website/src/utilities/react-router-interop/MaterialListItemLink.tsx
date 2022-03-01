import { Button, Theme } from "@mui/material"
import { makeStyles } from "@mui/styles"
import clsx from "clsx"
import React, { ReactElement, ReactNode, forwardRef } from "react"
import { matchPath, LinkProps, Link } from "react-router-dom"

type ListItemLinkProps = {
	icon?: ReactElement
	primary: ReactNode
	to: string
}

function ListItemLink(props: ListItemLinkProps) {
	const { icon, primary, to } = props

	const styles = useListItemLinkStyles()

  // this may need to be flipped?
  const matchResult = matchPath(to, window.location.pathname)
  
	const shouldBeSelected = matchResult !== null

	const renderLink = React.useMemo(
		() =>
			// eslint-disable-next-line react/display-name
			forwardRef<HTMLAnchorElement, Omit<LinkProps, 'to' | 'color'>>(
				(itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />,
			),
		[to],
	)

	return (
		<li>
			<Button
				className={clsx(styles.button, { [styles.selected]: shouldBeSelected })}
				startIcon={icon}
				component={renderLink}
			>
				{primary}
			</Button>
		</li>
	)
}

export default ListItemLink

const useListItemLinkStyles = makeStyles((theme: Theme) => ({
	button: {
		justifyContent: 'flex-start',

		// 1.25 is enough, not too much, not too little
		padding: theme.spacing(1.25, 2),

		width: '100%',

		color: theme.palette.text.secondary,
		textTransform: 'none',
	},

	selected: {
		color: theme.palette.primary.main,
	},
}))