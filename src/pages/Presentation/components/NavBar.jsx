/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import { AppBar, Grid, Button } from '@mui/material';

// eslint-disable-next-line react/prop-types
function NavBar({ drawerWidth = 400 }) {
	return (
		<AppBar
			position="fixed"
			sx={{
				width: { sm: `calc(100% - ${drawerWidth}px)` },
				ml: { sm: `${drawerWidth}px` },
			}}
		>
			<Grid
				container
				direction="row"
				justifyContent="space-between"
				sx={{
					height: { sm: 80 },
				}}
			>
				<Button variant="contained">Login</Button>
				<Button variant="contained">Create account</Button>
			</Grid>
		</AppBar>
	);
}

export default NavBar;
