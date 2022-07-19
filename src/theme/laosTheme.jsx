import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const laosTheme = createTheme({
	palette: {
		primary: {
			main: '#212121',
		},
		secondary: {
			main: '#8e24aa',
		},
		error: {
			main: red.A400,
		},
	},
});

export default laosTheme;
