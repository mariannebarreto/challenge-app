/* eslint-disable react/prop-types */
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import NavBar from '../components/NavBar';

function Presentation({ children }) {
	return (
		<NavBar>
			<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
				<Toolbar />

				{children}
			</Box>
		</NavBar>
	);
}

export default Presentation;
