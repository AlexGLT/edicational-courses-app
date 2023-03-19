import {AppBar, Toolbar, Typography} from '@mui/material';

import './header.scss';


export const Header = () => {
	return (
		<AppBar className="header">
			<Toolbar>
				<Typography variant="h6">Home</Typography>
			</Toolbar>
		</AppBar>
	);
};
