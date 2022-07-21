import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const laosTheme = createTheme({
	palette: {
		primary: {
			main: '#212121',
		},
		secondary: {
			main: '#543884',
		},
		error: {
			main: red.A400,
		},
	},
});

export default laosTheme;
