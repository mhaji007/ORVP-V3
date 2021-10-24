import { Typography, InputLabel } from '@material-ui/core'

export default function HeadingType({ variant = 'h1', text = "", style = {}, required = false, className="" }) {
	return (
		<div style={{ display: 'flex' }} className={className}>
			<InputLabel required={required && text}></InputLabel>
			<Typography variant={variant} component="div" style={style ? style : {}} >
				{text}
			</Typography>
		</div>
	);
}