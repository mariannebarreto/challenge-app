import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import homeLoan from '../../../assets/images/homeLoan.jpg';

function HomeLoan() {
	return (
		<section
			style={{
				backgroundImage: `url(${homeLoan})`,
				height: '100vh',
				backgroundSize: 'cover',
			}}
		>
			<Grid
				container
				spacing={4}
				sx={{
					mt: '120px',
					pl: '50px',
					pr: '50px',
					display: { xs: 'none', md: 'flex' },
					direction: 'column',
				}}
			>
				<Grid
					item
					md={6}
					sx={{
						mt: '120px',
					}}
				>
					<div>
						<Typography
							variant="h3"
							sx={{
								pl: 5,
								mr: 2,
								fontWeight: 800,
								letterSpacing: '.2rem',
								color: 'white',
								textDecoration: 'none',
							}}
						>
							BUILD YOUR FUTURE
						</Typography>
					</div>
				</Grid>
				<Grid
					item
					md={6}
					sx={{
						mt: '120px',
					}}
				>
					<div
						style={{
							p: '2',
							backgroundColor: 'rgba(28, 20, 3, 0.84)',
							textAlign: 'left',
							borderRadius: '20px',
							height: 'auto',
						}}
					>
						<Typography
							variant="h6"
							sx={{
								p: 3,
								mr: 2,
								ml: 2,
								fontWeight: 500,
								letterSpacing: '.2rem',
								color: 'white',
								textDecoration: 'none',
							}}
						>
							Whether you're looking to build, purchase, or refinance, we can
							work with you to establish terms suited to your unique situation.
						</Typography>
						<Button
							variant="contained"
							size="large"
							sx={{
								borderRadius: '10px',
								height: '50px',
								backgroundColor: 'rgba(161, 120, 26, 0.91)',
								fontSize: '17px',
								width: '200px',
								mt: '15px',
								mb: '15px',
								ml: '30px',
							}}
						>
							Tell me more
						</Button>
					</div>
				</Grid>
			</Grid>

			{/* ----SMALL VERSION */}

			<Grid
				container
				spacing={2}
				sx={{
					pl: '50px',
					pr: '40px',
					display: { xs: 'flex', md: 'none' },
					direction: 'column',
				}}
			>
				<Grid
					item
					md={6}
					sx={{
						mt: '100px',
					}}
				>
					<div>
						<Typography
							variant="h5"
							sx={{
								p: '3',
								mb: '2',
								textAlign: 'center',
								fontWeight: 800,
								letterSpacing: '.2rem',
								color: 'black',
								textDecoration: 'none',
							}}
						>
							BUILD YOUR FUTURE
						</Typography>
					</div>
				</Grid>
				<Grid
					item
					md={6}
					sx={{
						mt: '50px',
						p: '2',
						alignItems: 'center',
					}}
				>
					<div
						style={{
							backgroundColor: 'rgba(28, 20, 3, 0.84)',
							textAlign: 'center',
							borderRadius: '10px',
							height: 'auto',
							p: '3',
							width: 'auto',
						}}
					>
						<Typography
							variant="p"
							sx={{
								p: '2',
								mr: '10px',
								ml: '10px',
								fontWeight: 500,
								letterSpacing: '.2rem',
								color: 'white',
								textDecoration: 'none',
							}}
						>
							Whether you're looking to build, purchase, or refinance, we can
							work with you to establish terms suited to your unique situation.
						</Typography>
					</div>
					<Button
						variant="contained"
						size="large"
						sx={{
							borderRadius: '10px',
							height: '50px',
							backgroundColor: 'rgba(161, 120, 26, 0.91)',
							fontSize: '17px',
							width: '200px',
							mt: '25px',
							mb: '15px',
							ml: '30px',
						}}
					>
						Tell me more
					</Button>
				</Grid>
			</Grid>
		</section>
	);
}

export default HomeLoan;
