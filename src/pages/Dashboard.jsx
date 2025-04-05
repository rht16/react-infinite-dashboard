import { useEffect, useState, useRef, useCallback } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import { useAuth } from '../hooks/useAuth';

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const observer = useRef();
  const { logout } = useAuth();

  const lastUserRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setPage(prev => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  }, [loading]);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://randomuser.me/api/?page=${page}&results=10&seed=rohit`);
        setUsers(prev => [...prev, ...res.data.results]);
      } catch (err) {
        console.error("Error fetching users", err);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, [page]);

  return (
    <div style={{ padding: 20 }}>
      <h2>User Dashboard</h2>
      <button onClick={logout} style={{ marginBottom: 20 }}>Logout</button>

      {users.map((user, i) => {
        const card = (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 20,
            border: '1px solid #ccc',
            borderRadius: 10,
            padding: 15,
            marginBottom: 20,
            boxShadow: '0 0 8px rgba(0,0,0,0.05)'
          }}>
            <img src={user.picture.large} alt="User" style={{ width: 80, height: 80, borderRadius: '50%' }} />
            <div>
              <h4 style={{ margin: 0 }}>{user.name.title} {user.name.first} {user.name.last}</h4>
              <p style={{ margin: '5px 0' }}>{user.email}</p>
              <p style={{ margin: 0, color: '#666' }}>{user.location.city}, {user.location.country}</p>
            </div>
          </div>
        );

        return i === users.length - 1
          ? <div ref={lastUserRef}>{card}</div>
          : card;
      })}

      {loading && <Loader />}
    </div>
  );
}