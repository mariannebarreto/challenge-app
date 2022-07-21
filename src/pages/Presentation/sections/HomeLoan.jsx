import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import loanBudget from '../../../assets/images/loanBudget.jpg';

function HomeLoan() {
	return (
		<section
			style={{
				backgroundImage: `url(${loanBudget})`,
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
						mt: '92px',
						alignItems: 'center',
						mr: '10px',
						textAlign: 'center',
					}}
				>
					<div
						style={{
							backgroundColor: 'rgba(28, 20, 3, 0.84)',
							textAlign: 'center',
							borderRadius: '10px',
							height: 'auto',
							width: 'auto',
							padding: '10px',
						}}
					>
						<Typography
							variant="h5"
							sx={{
								mb: '50px',
								textAlign: 'center',
								fontWeight: 800,
								letterSpacing: '.2rem',
								color: 'white',
								textDecoration: 'none',
							}}
						>
							BUILD YOUR FUTURE
						</Typography>
						<Typography
							variant="p"
							sx={{
								paddingBottom: '10px',
								pr: '10px',
								mr: '10px',
								ml: '10px',
								fontWeight: 400,
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
								mt: '20px',
								mb: '10px',
							}}
						>
							Tell me more
						</Button>
					</div>
				</Grid>
			</Grid>
		</section>
	);
}

export default HomeLoan;
