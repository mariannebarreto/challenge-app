/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
import { Toolbar, Grid, Typography, Button, TextField } from '@mui/material';
import { Box } from '@mui/system';
import NavBar from '../components/NavBar';
import frontline from '../../../assets/images/frontline.jpg';

function Presentation({ children }) {
	return (
		<section>
			<NavBar>
				<Box component="main" sx={{ flexGrow: 1, p: 3 }}>
					<Toolbar />

					{children}
				</Box>
			</NavBar>
			<Grid
				container
				spacing={1}
				sx={{
					mt: '100px',
					pl: '50px',
					pr: '50px',
					display: { xs: 'none', md: 'flex' },
					direction: 'column',
				}}
			>
				<Grid item md={6}>
					<div
						style={{
							backgroundColor: 'rgba(15, 10, 0, 0.62)',
							textAlign: 'center',
							borderRadius: '30px',
						}}
					>
						<Typography
							variant="h1"
							sx={{
								pl: 5,
								mr: 2,
								fontWeight: 500,
								letterSpacing: '.2rem',
								color: 'white',
								textDecoration: 'none',
							}}
						>
							Say hi to HIVE.
						</Typography>
						<br />
						<Typography
							variant="h2"
							sx={{
								pl: 5,
								pr: 5,
								fontWeight: 400,
								letterSpacing: '.2rem',
								color: 'white',
								textDecoration: 'none',
								fontSize: '30px',
							}}
						>
							The digital bank for essential workers who make the world a better
							place.
						</Typography>
					</div>
				</Grid>
				<Grid
					item
					md={5}
					sx={{
						mt: '40px',
					}}
				>
					<div>
						<img
							src={frontline}
							alt="frontline workers"
							width="400px"
							height="auto"
							align="right"
							style={{
								borderRadius: '70px',
							}}
						/>
					</div>
				</Grid>
				<Grid
					item
					sx={{
						backgroundColor: 'white',
						height: '80px',
						borderRadius: '10px',
						mt: '30px',
						width: '400px',
						pr: '10px',
						ml: '25%',
					}}
				>
					<TextField
						label="Email"
						type="email"
						placeholder="yourmail@provider.com"
						size="large"
						fullWidth
					/>
				</Grid>
				<Grid
					item
					sx={{
						mt: '22px',
						ml: '8px',
					}}
				>
					<Button
						variant="contained"
						size="large"
						style={{
							borderRadius: '20px',
							height: '80px',
							backgroundColor: 'rgba(15, 10, 0, 0.62)',
							fontSize: '17px',
						}}
					>
						Create account
					</Button>
				</Grid>
			</Grid>

			{/* ----SMALL VERSION */}
			<Grid
				container
				spacing={2}
				sx={{
					mt: '60px',
					pl: '50px',
					pr: '50px',
					display: { xs: 'flex', md: 'none' },
					direction: 'column',
				}}
			>
				<Grid item md={6}>
					<div
						style={{
							backgroundColor: 'transparent',
							textAlign: 'center',
							borderRadius: '30px',
						}}
					>
						<Typography
							variant="h1"
							sx={{
								pl: 5,
								mr: 2,
								fontWeight: 500,
								letterSpacing: '.2rem',
								color: 'white',
								textDecoration: 'none',
								fontSize: '50px',
							}}
						>
							Say hi to HIVE.
						</Typography>
						<br />
						<Typography
							variant="h2"
							sx={{
								pl: 5,
								pr: 5,
								fontWeight: 400,
								letterSpacing: '.2rem',
								color: 'white',
								textDecoration: 'none',
								fontSize: '20px',
								mb: '40px',
							}}
						>
							The digital bank for essential workers who make the world a better
							place.
						</Typography>
					</div>
					<Grid item>
						<Button
							variant="contained"
							fullWidth
							style={{
								borderRadius: '20px',
								height: '80px',
								mt: '25px',
								backgroundColor: 'rgba(15, 10, 0, 0.62)',
								fontSize: '17px',
							}}
						>
							Create account
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</section>
	);
}

export default Presentation;
