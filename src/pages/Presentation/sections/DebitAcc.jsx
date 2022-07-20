import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import debit from '../../../assets/images/debit.jpg';

function DebitAcc() {
	return (
		<section
			style={{
				backgroundImage: `url(${debit})`,
				height: '100vh',
				backgroundSize: 'cover',
			}}
		>
			<Grid
				container
				spacing={4}
				sx={{
					mt: '100px',
					pl: '50px',
					pr: '50px',
					display: { xs: 'none', md: 'flex' },
					direction: 'column',
					mb: '50px',
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
								color: 'black',
								textDecoration: 'none',
							}}
						>
							START SAVING AND TRANSACTING INSTANTLY.
						</Typography>
					</div>
					{/* <Typography
						variant="h6"
						sx={{
							mt: '50px',
							ml: '40px',
							p: '10px',
							fontWeight: 500,
							letterSpacing: '.2rem',
							color: 'white',
							textDecoration: 'none',
							backgroundColor: 'rgba(28, 20, 3, 0.84)',
							borderRadius: '10px',
							textAlign: 'left',
							height: '60px',
							width: 'auto',
						}}
					>
						<EmojiEventsIcon />

					</Typography> */}
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
							backgroundColor: 'rgba(28, 20, 3, 0.84)',
							textAlign: 'left',
							borderRadius: '20px',
							height: 'auto',
						}}
					>
						<Typography
							variant="h6"
							sx={{
								p: 1,
								mr: 2,
								ml: 2,
								fontWeight: 500,
								letterSpacing: '.2rem',
								color: 'white',
								textDecoration: 'none',
							}}
						>
							<ul>
								<li>
									No everyday banking fees. You work hard for your money, you
									should keep it.
								</li>
								<li>
									Pay your way and transact instantly using Apple Pay or Google
									Pay or with your Hive Visa debit card .
								</li>
								<li>
									Budget better with auto categorisation of your spending.
								</li>
								<li>
									Earn 5% cash back on essential purchases like groceries,
									public transport, and bill payments.
								</li>
							</ul>
							<Button
								variant="contained"
								size="large"
								sx={{
									borderRadius: '10px',
									height: '50px',
									backgroundColor: 'rgba(161, 120, 26, 0.91)',
									fontSize: '17px',
									width: '200px',
									mb: '15px',
									ml: '30px',
								}}
							>
								Get Started
							</Button>
						</Typography>
					</div>
				</Grid>
			</Grid>
			{/* ----SMALL VERSION */}

			<Grid
				container
				spacing={2}
				sx={{
					mt: '70px',
					pl: '50px',
					pr: '40px',
					display: { xs: 'flex', md: 'none' },
					direction: 'column',
					mb: '125px',
				}}
			>
				<Grid
					item
					md={6}
					sx={{
						mt: '50px',
					}}
				>
					<div>
						<Typography
							variant="h5"
							sx={{
								pl: 3,
								mr: 2,
								textAlign: 'center',
								fontWeight: 800,
								letterSpacing: '.2rem',
								color: 'black',
								textDecoration: 'none',
							}}
						>
							START SAVING AND TRANSACTING INSTANTLY.
						</Typography>
					</div>
				</Grid>
				<Grid
					item
					md={6}
					sx={{
						mt: '20px',
					}}
				>
					<div
						style={{
							backgroundColor: 'rgba(28, 20, 3, 0.84)',
							textAlign: 'left',
							borderRadius: '10px',
							height: 'auto',
							pr: '1',
						}}
					>
						<Typography
							variant="p"
							sx={{
								mr: '15px',
								ml: 2,
								fontWeight: 500,
								letterSpacing: '.2rem',
								color: 'white',
								textDecoration: 'none',
							}}
						>
							<ul>
								<li>No everyday banking fees.</li>
								<li>Pay your way and transact instantly.</li>
								<li>
									Budget better with auto categorisation of your spending.
								</li>
								<li>Earn 5% cash back on essential purchases.</li>
							</ul>
							<Button
								variant="contained"
								size="large"
								sx={{
									borderRadius: '10px',
									height: '50px',
									backgroundColor: 'rgba(161, 120, 26, 0.91)',
									fontSize: '17px',
									width: '200px',
									mb: '15px',
									ml: '30px',
								}}
							>
								Get Started
							</Button>
						</Typography>
					</div>
				</Grid>
			</Grid>
		</section>
	);
}

export default DebitAcc;
