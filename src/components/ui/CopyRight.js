import { Typography } from "@material-ui/core";

export const CopyRight = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'OATI Desarrollo © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}