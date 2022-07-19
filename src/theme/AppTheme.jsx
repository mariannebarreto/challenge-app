/* eslint-disable react/prop-types */
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import laosTheme from './laosTheme';

function AppTheme({ children }) {
	return (
		<ThemeProvider theme={laosTheme}>
			{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}

export default AppTheme;
