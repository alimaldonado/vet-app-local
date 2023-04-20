import { Link, Typography } from "@mui/material";

export default function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link target="_blank" rel="noreferrer" color="inherit" href="https://alimaldonado.me/">
        Ali Maldonado
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
