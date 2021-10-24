import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { FormHelperText } from '@material-ui/core';
import HeadingType from '../HeadingType';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#EEF3F6',
    border: '1px solid #1597C6',
    boxSizing: 'border-box',
    borderRadius: '23px',
    marginLeft: 20
  },
  error: {
    borderColor: "red"
  },
  toggleContainer: {
    margin: theme.spacing(2, 0),
  },
  buttonSpec: {
    border: '0px',
    borderRadius: '23px',
    width: '58px',
    fontSize: 14,
    lineHeight: 1.4,
    [theme.breakpoints.down('xs')]: {
      width: '50px',
      fontSize: 11,
      lineHeight: 1.2,
    }
  },
  extrapad: {
    width: '70px',
  },
  selected: {
    background: '#1597C6',
    borderRadius: '23px'
  }
}));

export default function ToggleButtonNotEmpty({ other = false, onChange, name, value = 'yes', required = false, isSubmitted, label = "" }) {
  const handleAlignment = (event, newAlignment) => {
    onChange(name, newAlignment)
  };

  const classes = useStyles();

  return (
    <div className="space-between">
      {label && <HeadingType variant="body" required={required} text={label} className="pt-7" />}
      <div>
        <div className={`${classes.root} ${(required && isSubmitted && !value) && classes.error}`}>
          <ToggleButtonGroup
            value={value}
            name={name}
            exclusive
            onChange={handleAlignment}
            aria-label="toggle values"
            style={{ width: '100%', border: "red" }}
          >
            <ToggleButton disableFocusRipple classes={{ selected: classes.selected }} value="yes" aria-label="yes" className={`${classes.buttonSpec} `}>Yes</ToggleButton>
            <ToggleButton disableFocusRipple classes={{ selected: classes.selected }} value="no" aria-label="no" className={`${classes.buttonSpec} `}>No</ToggleButton>
            {other && <ToggleButton disableFocusRipple classes={{ selected: classes.selected }} value="others" aria-label="others" className={`${classes.buttonSpec} ${classes.extrapad}`}>Other</ToggleButton>}
          </ToggleButtonGroup>

        </div>
        {(required && isSubmitted && !value) && <FormHelperText error required class="contained">This field is required</FormHelperText>}

      </div>
    </div>
  );
}
