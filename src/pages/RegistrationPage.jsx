import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Grid, Avatar, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { DatePicker } from '@mui/lab';

const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        dob: null,
        email: '',
        contactNumber: '',
        degreeName: '',
        educationalInstitute: '',
        cgpa: '',
        passingYear: '',
        presentAddress: '',
        profilePicture: null,
        cvResume: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleDateChange = (date) => {
        setFormData((prevFormData) => ({ ...prevFormData, dob: date }));
    };

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevFormData) => ({ ...prevFormData, profilePicture: file }));
    };

    const handleCVResumeChange = (e) => {
        const file = e.target.files[0];
        setFormData((prevFormData) => ({ ...prevFormData, cvResume: file }));
    };

    const handlePassingYearChange = (e) => {
        setFormData((prevFormData) => ({ ...prevFormData, passingYear: e.target.value }));
    };

    const handleDegreeChange = (e) => {
        setFormData((prevFormData) => ({ ...prevFormData, degreeName: e.target.value }));
    };

    const degrees = [
        'BSc', 'BA', 'MSc', 'MA', 'BCom', 'MCom', 'HSC', 'Other'
    ];

    const passingYears = [];
    const currentYear = new Date().getFullYear();
    for (let i = 0; i < 10; i++) {
        passingYears.push(currentYear + i);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here (e.g., send data to backend server)
        console.log(formData);
        // Reset form after submission
        setFormData({
            firstName: '',
            lastName: '',
            gender: '',
            dob: null,
            email: '',
            contactNumber: '',
            degreeName: '',
            educationalInstitute: '',
            cgpa: '',
            passingYear: '',
            presentAddress: '',
            profilePicture: null,
            cvResume: null,
        });
    };

    return (
        <Container maxWidth="sm">
            <Box mt={4} >
                <Typography variant="h5" align="center">
                    Registration
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                name="firstName"
                                label="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                name="lastName"
                                label="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="gender"
                                label="Gender"
                                value={formData.gender}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            {/* <DatePicker
                label="Date of Birth"
                value={formData.dob}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} fullWidth />}
              /> */}

                            <TextField
                                id="date-field"
                                type="date"
                                value={formData.dob}
                                onChange={handleDateChange}
                                renderInput={(params) => <TextField {...params} fullWidth />}

                            />


                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                type="email"
                                name="email"
                                label="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="contactNumber"
                                label="Contact Number"
                                value={formData.contactNumber}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl fullWidth required>
                                <InputLabel>Degree Name</InputLabel>
                                <Select
                                    value={formData.degreeName}
                                    onChange={handleDegreeChange}
                                >
                                    {degrees.map((degree) => (
                                        <MenuItem key={degree} value={degree}>
                                            {degree}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="educationalInstitute"
                                label="Educational Institute"
                                value={formData.educationalInstitute}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                required
                                name="cgpa"
                                label="CGPA"
                                value={formData.cgpa}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FormControl fullWidth required>
                                <InputLabel>Passing Year</InputLabel>
                                <Select
                                    value={formData.passingYear}
                                    onChange={handlePassingYearChange}
                                >
                                    {passingYears.map((year) => (
                                        <MenuItem key={year} value={year}>
                                            {year}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                required
                                name="presentAddress"
                                label="Present Address"
                                value={formData.presentAddress}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">Upload Profile Picture:</Typography>
                            <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="subtitle1">Upload CV/Resume:</Typography>
                            <input type="file" accept=".pdf,.doc,.docx" onChange={handleCVResumeChange} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type="submit" variant="contained" color="primary">
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </Container>
    );
};

export default Registration;
