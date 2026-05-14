import { Grid } from "@mui/material";

import PeopleIcon from "@mui/icons-material/People";

import PaymentsIcon from "@mui/icons-material/Payments";

import MessageIcon from "@mui/icons-material/Message";

import EventIcon from "@mui/icons-material/Event";

import StatCard from "../components/cards/StatCard";

import DonationChart from "../components/charts/DonationChart";

import UsersTable from "../components/tables/UsersTable";

export default function Dashboard() {
  return (
    <div>
      {/* CARDS */}

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Users"
            value="1,250"
            icon={<PeopleIcon fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Donations"
            value="₹2.5L"
            icon={<PaymentsIcon fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Messages"
            value="320"
            icon={<MessageIcon fontSize="large" />}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <StatCard
            title="Events"
            value="18"
            icon={<EventIcon fontSize="large" />}
          />
        </Grid>
      </Grid>

      {/* CHART */}

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <DonationChart />
      </div>

      {/* TABLE */}

      <div
        style={{
          marginTop: "30px",
        }}
      >
        <UsersTable />
      </div>
    </div>
  );
}
