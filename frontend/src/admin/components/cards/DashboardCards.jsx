import { Grid } from "@mui/material";

import StatCard from "./StatCard";

export default function DashboardCards() {
  const stats = [
    {
      title: "Total Users",
      value: "1,250",
    },
    {
      title: "Donations",
      value: "₹2.5L",
    },
    {
      title: "Messages",
      value: "320",
    },
    {
      title: "Events",
      value: "18",
    },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.title}>
          <StatCard title={item.title} value={item.value} />
        </Grid>
      ))}
    </Grid>
  );
}
