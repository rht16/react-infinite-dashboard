import { Stack } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
  return (
    <Stack alignItems="center" justifyContent="center" sx={{ height: '100%' }}>
      <CircularProgress />
    </Stack>
  );
}