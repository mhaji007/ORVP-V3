import { KeyboardDatePicker } from '@material-ui/pickers';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { Grid, makeStyles } from '@material-ui/core';
import HeadingType from '../HeadingType';


const useStyles = makeStyles((theme) => ({
  pt30: {
    [theme.breakpoints.up('lg')]: {
      paddingTop: 30
    }
  },
}));

export default function DatePicker({ value, onChange, label, required = false }) {
  const classes = useStyles()

  return (
    <Grid container>
      <Grid xl={6} lg={6} sm={12} xs={12}>
        <HeadingType variant="body" required={required} text={label} style={{ fontsize: '18px', fontWeight: '500' }} className={classes.pt30} />
      </Grid>
      <Grid xl={6} lg={6} sm={7} xs={12}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            fullWidth
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            value={value}
            onChange={onChange}
            error
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
            InputProps={{
              disableUnderline: true,
            }}
            inputProps={{
              padding: '10px 10px',
              style: {
                padding: '10px 10px',
              }
            }}
            style={{
              padding: '10px 0px 10px 10px',
              border: '1px solid #1597C6',
              borderRadius: 6,
              backgroundColor: '#f2f2f2'
            }}
          />
        </MuiPickersUtilsProvider>
      </Grid>
    </Grid>

  );

}