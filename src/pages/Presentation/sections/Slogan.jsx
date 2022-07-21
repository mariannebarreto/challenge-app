import React from 'react';
import { Grid, Typography } from '@mui/material';

function Slogan() {
	return (
		<section>
			<Grid
				container
				fullWidth
				sx={{
					backgroundColor: 'black',
					height: '200px',
					justifyContent: 'center',
					display: { xs: 'none', md: 'flex' },
				}}
			>
				<Typography
					variant="h3"
					sx={{
						fontWeight: 400,
						letterSpacing: '.3rem',
						color: 'white',
						textDecoration: 'none',
						fontSize: '25px',
						mt: '90px',
						textAlign: 'center',
					}}
				>
					Check out our benefits and be part of the HIVE!
				</Typography>
			</Grid>
			{/* ----SMALL VERSION */}

			<Grid
				container
				fullWidth
				sx={{
					backgroundColor: 'black',
					height: 'auto',
					justifyContent: 'center',
					display: { xs: 'flex', md: 'none' },
					pl: '15px',
				}}
			>
				<Typography
					variant="h3"
					sx={{
						fontWeight: 300,
						letterSpacing: '.3rem',
						color: 'white',
						textDecoration: 'none',
						fontSize: '18px',
						mt: '25px',
						mb: '25px',
					}}
				>
					Check out our benefits and be part of the HIVE!
				</Typography>
			</Grid>
		</section>
	);
}

export default Slogan;
