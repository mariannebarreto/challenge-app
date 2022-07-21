/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
/* eslint-disable react/prop-types */
import {
	Toolbar,
	Grid,
	Typography,
	Button,
	TextField,
	InputAdornment,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import { Box } from '@mui/system';
import NavBar from '../components/NavBar';
import homeBank from '../../../assets/images/homeBank.jpg';

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
					mb: '100px',
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
					md={6}
					sx={{
						mt: '-3px',
					}}
				>
					<div>
						<img
							src={homeBank}
							alt="digital bank"
							width="500px"
							height="auto"
							align="right"
							style={{
								borderRadius: '70px 0 0 70px',
							}}
						/>
					</div>
				</Grid>
				<Grid
					item
					sx={{
						backgroundColor: 'white',
						height: '80px',
						mt: '30px',
						width: '400px',
						pr: '10px',
						ml: '15px',
						br: '20px',
					}}
				>
					<TextField
						label="Email"
						type="email"
						placeholder="yourmail@provider.com"
						size="large"
						sx={{
							br: '15px',
						}}
						fullWidth
						InputProps={{
							startAdornment: (
								<InputAdornment position="start">
									<EmailIcon />
								</InputAdornment>
							),
						}}
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
							borderRadius: '15px',
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
					mt: '90px',
					pl: '50px',
					pr: '50px',
					display: { xs: 'flex', md: 'none' },
					direction: 'column',
					mb: '125px',
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
								fontSize: '18px',
								mb: '40px',
							}}
						>
							The digital bank for essential workers who make the world a better
							place.
						</Typography>
					</div>
					<Grid
						item
						sx={{
							mb: '20px',
						}}
					>
						<Button
							variant="contained"
							fullWidth
							style={{
								borderRadius: '12px',
								height: '50px',
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
