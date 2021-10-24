import { Divider, TextField } from '@material-ui/core';
import { useState } from 'react';
import HeadingType from '../HeadingType';

function TextInput({ variant = "outlined", fullWidth = true, isSubmitted = false, label = "", value = "", required = false, placeholder = "", onChange, name, multiline = false, maxRows = 1, noDivider = false }) {
  const [focused, setFocused] = useState(false)
  return (
    <>
      <HeadingType variant="body" required={required} text={label} style={{ fontsize: '18px', fontWeight: '500' }} />
      <TextField
        name={name}
        variant={variant}
        fullWidth={fullWidth}
        placeholder={placeholder}
        error={required && isSubmitted && !value}
        focused={!!value || focused}
        required={required}
        onChange={onChange}
        helperText={(required && isSubmitted && !value) && "This field is required"}
        onBlur={(e) => { setFocused(false) }}
        onFocus={(e) => { setFocused(true) }}
        rows={maxRows}
        multiline={multiline}
      />
      {!noDivider ? <Divider /> : null}
    </>

  );
}

export default TextInput;
