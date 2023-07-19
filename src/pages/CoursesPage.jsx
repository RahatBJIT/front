import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles'; // Import the styled function from Emotion

const CourseCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  borderRadius: theme.spacing(1),
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s ease-in-out',

  '&:hover': {
    transform: 'scale(1.03)',
  },
}));

const CourseMedia = styled(CardMedia)(({ theme }) => ({
  height: 180,
  objectFit: 'cover',
  borderTopLeftRadius: theme.spacing(1),
  borderTopRightRadius: theme.spacing(1),
}));

const CourseContent = styled(CardContent)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(2),
}));

const CourseTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1.2rem',
}));

const CourseDescription = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

const EnrollButton = styled(Button)(({ theme }) => ({
  marginTop: 'auto',
  borderRadius: theme.spacing(0),
  fontWeight: 600,
}));

const courses12 = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Learn to build modern web applications.',
    imageUrl: 'https://via.placeholder.com/300x180',
  },
  {
    id: 2,
    title: 'Data Science',
    description: 'Master data analysis and machine learning.',
    imageUrl: 'https://via.placeholder.com/300x180',
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Create amazing mobile apps for iOS and Android.',
    imageUrl: 'https://via.placeholder.com/300x180',
  },
  {
    id: 4,
    title: 'Data Science',
    description: 'Master data analysis and machine learning.',
    imageUrl: 'https://via.placeholder.com/300x180',
  },
  {
    id: 5,
    title: 'Mobile App Development',
    description: 'Create amazing mobile apps for iOS and Android.',
    imageUrl: 'https://via.placeholder.com/300x180',
  },
  // Add more courses here...
];


const AllCourses = ({courses}) => {

  console.log(courses?.data.data.listResponse);
  return (
    <Box mt={4} >
      <Grid container spacing={2}>
        {courses?.data.data.listResponse.map((course) => (
          <Grid item key={course.courseId} xs={12} sm={6} md={4}>
            <CourseCard>
              <CourseMedia component="img" image={course.imageUrl} alt={course.title} />
              <CourseContent>
                <CourseTitle variant="h6">{course.courseName}</CourseTitle>
                <CourseDescription variant="body2">{course.courseDescription}</CourseDescription>
              </CourseContent>
              <EnrollButton variant="contained" color="primary" size="small">
                Enroll Now
              </EnrollButton>
            </CourseCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AllCourses;
