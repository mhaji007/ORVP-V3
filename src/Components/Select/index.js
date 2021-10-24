import { Divider, FormHelperText, Grid, makeStyles, OutlinedInput, Select } from '@material-ui/core';
import { useState } from 'react';
import HeadingType from '../HeadingType';

const useStyles = makeStyles((theme) => ({
  pt15: {
    paddingBottom: 15,
    [theme.breakpoints.up('lg')]: {
      paddingTop: 15
    }
  },
}));

function SelectNative({ variant = "outlined", fullWidth = true, isSubmitted = false, label = "", value = "", required = false, onChange, name, noDivider = false, options = [] }) {
  const [focused, setFocused] = useState(false)
  const classes = useStyles();

  return (
    <Grid container>
      <Grid xl={6} lg={6} sm={12} xs={12}>
        <HeadingType variant="body" required={required} text={label} style={{ fontsize: '18px', fontWeight: '500' }} className={classes.pt15}/>
      </Grid>
      <Grid xl={6} lg={6} sm={12} xs={12}>
        <Select
          native
          displayEmpty
          variant={variant}
          fullWidth={fullWidth}
          required={required}
          onChange={onChange}
          name={name}
          value={value}
          helperText={(required && isSubmitted && !value) && "This field is required"}
          focused={!!value || focused}
          onClose={(e) => { setFocused(false) }}
          onOpen={(e) => { setFocused(true) }}
          input={
            <OutlinedInput
              variant={variant}
              fullWidth={fullWidth}
              value={value}
              focused={!!value || focused}
              required={required}
              error={required && isSubmitted && !value}
              helperText={(required && isSubmitted && !value) && "This field is required"}
            />

          }
        >
          <option value={""}>Select</option>
          {options.map((option, index) => (
            <option key={`${name}-${index}`} value={option.value}>{option.text}</option>
          ))}
        </Select>
        {(required && isSubmitted && !value) && <FormHelperText error required class="contained">This field is required</FormHelperText>}
      </Grid>
      <Grid sm={12}>{!noDivider ? <Divider /> : null}</Grid>
    </Grid>

  );
}

export default SelectNative;
