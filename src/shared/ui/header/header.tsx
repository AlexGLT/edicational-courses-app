import {AppBar, Toolbar, Typography} from '@mui/material';

import './header.scss';


type Props = {
	navigateToHome: () => void,
}

export const Header = ({navigateToHome}: Props) => {
	return (
		<AppBar className="header">
			<Toolbar>
				<Typography variant="h6" onClick={navigateToHome}>Home</Typography>
			</Toolbar>
		</AppBar>
	);
};
