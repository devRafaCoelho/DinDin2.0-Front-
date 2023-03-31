import { Visibility, VisibilityOff } from '@mui/icons-material'
import { FormLabel, Grid, IconButton, InputAdornment, Typography } from '@mui/material'
import { useState } from 'react'
import { CustomTextField } from './styles'

export default function DefaultTextField({ start, type, disabled, text, inputName, placeHolderText, passwordInput, mask, register, errors, middle }) {
  const [showPassword, setShowPassword] = useState(!passwordInput)

  function handleClickShowPassword() {
    setShowPassword((show) => !show)
  }

  function handleMouseDownPassword(event) {
    event.preventDefault()
  }

  return (
    <Grid item xs={12} sm={middle ?? 12}>
      <FormLabel htmlFor={inputName}>
        <Typography color="grey.1300" variant="formLabel">
          {text}
        </Typography>
      </FormLabel>
      <CustomTextField
        id={inputName}
        variant="outlined"
        disabled={disabled}
        placeholder={`Digite ${placeHolderText}`}
        fullWidth
        color="grey"
        {...register(inputName)}
        error={!!errors[inputName]}
        type={type ? type : showPassword ? 'text' : 'password'}
        helperText={errors[inputName] ? errors[inputName].message : null}
        InputProps={{
          startAdornment: start && (
            <InputAdornment position="start">
              <Typography variant="title5">{start}</Typography>
            </InputAdornment>
          ),
          endAdornment: passwordInput && (
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          )
        }}
        inputProps={mask ? Object.assign({ onKeyUp: mask }, mask) : mask}
      />
    </Grid>
  )
}
