/* eslint-disable react/prop-types */
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import NavBar from '../components/NavBar';

const drawerWidth = 280;

function Presentation({ children }) {
	return (
		<Box
			sx={{ display: 'flex' }}
			className="animate__animated animate__fadeIn animate__faster"
		>
			<NavBar drawerWidth={drawerWidth} />

			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />

				{children}
			</Box>
		</Box>
	);
}

export default Presentation;
