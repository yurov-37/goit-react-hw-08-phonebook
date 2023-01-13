// export default function Home() {
//   return (
//     <div style={styles.container}>
//       <h1 style={styles.title}>
//         Task manager welcome page{' '}
//         <span role="img" aria-label="Greeting icon">
//           💁‍♀️
//         </span>
//       </h1>
//     </div>
//   );
// }

import { Box, Typography } from '@mui/material';

export default function HomePage() {
  return (
    <Typography
      variant="h2"
      component="h1"
      padding="50px 24px 0"
      textAlign="center"
    >
      ContactsApp welcome page <Box component="span">📱</Box>
    </Typography>
  );
}
