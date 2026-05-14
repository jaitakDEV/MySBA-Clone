import { Card, CardContent, Typography, Box } from "@mui/material";

export default function StatCard({ title, value, icon }) {
  return (
    <Card
      sx={{
        borderRadius: 4,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",

            alignItems: "center",
          }}
        >
          <Box>
            <Typography color="text.secondary">{title}</Typography>

            <Typography variant="h4" fontWeight="bold">
              {value}
            </Typography>
          </Box>

          {icon}
        </Box>
      </CardContent>
    </Card>
  );
}
