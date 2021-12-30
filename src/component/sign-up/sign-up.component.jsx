import React, { useState } from "react";
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
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

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
                                                placeholder="First Name"
                                                value={value} 
                                                onChange={onChange} />
                                )} 
                                rules={{
                                    required: {
                                        message: 'Must specify name',
                                        value: true
                                    }
                                }}
                                />
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                    <TextField value={lastName} placeholder="Last Name" onChange={event => setLastName(event.target.value)} fullWidth />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <TextField value={email} placeholder="Email" onChange={event => setEmail(event.target.value)} fullWidth />
                </Grid>
                <Grid item></Grid>
                <Grid item></Grid>
            </Grid>
        </form>
    )
}

export default SignUp;