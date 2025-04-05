import { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import { useAuth } from '../hooks/useAuth';
import UserCard from '../components/UserCard';
import {
  Box,
  Button,
  Container,
  Typography,
  Grid,
  Paper,
} from '@mui/material';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();
  const { logout } = useAuth();

  const lastUserRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://randomuser.me/api/?page=${page}&results=10&seed=rohit`
        );
        setUsers((prev) => [...prev, ...res.data.results]);
      } catch (err) {
        console.error('Error fetching users', err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [page]);

  return (
    <Box sx={{ bgcolor: '#f7f7f7', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h5" fontWeight="bold">
            User Dashboard
          </Typography>
          <Button variant="contained" onClick={logout}>
            Logout
          </Button>
        </Box>

        {/* User Grid */}
        <Grid container spacing={3}>
          {users.map((user, i) => {
            const fullName = `${user.name.first} ${user.name.last}`;
            const location = `${user.location.city}, ${user.location.country}`;
            const age = user.dob.age;
            const phone = user.phone;
            const nationality = user.nat;
            const picture = user.picture.large;

            return (
              <Grid
                item
                xs={12} sm={6} md={4} lg={3} xl={2}
                key={i}
                ref={i === users.length - 1 ? lastUserRef : null}
              >
                <Paper elevation={3} sx={{ p: 2, height: '100%' }}>
                  <UserCard
                    name={fullName}
                    email={user.email}
                    location={location}
                    picture={picture}
                    age={age}
                    phone={phone}
                    nationality={nationality}
                  />
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* Loader */}
        {loading && <Loader />}
      </Container>
    </Box>
  );
}