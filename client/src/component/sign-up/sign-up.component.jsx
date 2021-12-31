import React from "react";
import { Grid, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

const SignUp = () => {

    const { control, handleSubmit } = useForm({
        mode: 'onChange',
        reValidateMode: 'onChange',
        criteriaMode: 'all',
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            acceptTerms: false
        }
    })

    return (
        <form>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Controller control={control}
                                name="firstName"
                                render={({
                                    field: { onChange, onBlur, value, name, ref },
                                    fieldState: { invalid, isTouched, isDirty, error },
                                    formState,
                                }) => (
                                    <TextField  error={invalid}
                                                fullWidth
                                                helperText={error?.message}
                                                placeholder="First Name"
                                                value={value} 
                                                onChange={onChange} />
                                )}
                                rules={{
                                    required: {
                                        message: 'Required',
                                        value: true
                                    }
                                }}
                                />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <Controller control={control}
                                name="lastName"
                                render={({
                                    field: { onChange, onBlur, value, name, ref },
                                    fieldState: { invalid, isTouched, isDirty, error },
                                    formState,
                                }) => (
                                    <TextField  error={invalid}
                                                fullWidth
                                                helperText={error?.message}
                                                placeholder="Last Name"
                                                value={value} 
                                                onChange={onChange} />
                                )} 
                                rules={{
                                    required: {
                                        message: 'Required',
                                        value: true
                                    }
                                }}
                                />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Controller control={control}
                                name="email"
                                render={({
                                    field: { onChange, onBlur, value, name, ref },
                                    fieldState: { invalid, isTouched, isDirty, error },
                                    formState,
                                }) => (
                                    <TextField  error={invalid}
                                                fullWidth
                                                helperText={error?.message}
                                                placeholder="E-mail"
                                                type="email"
                                                value={value} 
                                                onChange={onChange} />
                                )} 
                                rules={{
                                    required: {
                                        message: 'Required',
                                        value: true
                                    },
                                    pattern: {
                                        message: 'Email not valid',
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                                    }
                                }}
                                />
                    
                </Grid>
                <Grid item></Grid>
                <Grid item></Grid>
            </Grid>
        </form>
    )
}

export default SignUp;