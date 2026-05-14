import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const data = [
  {
    month: "Jan",
    amount: 4000,
  },
  {
    month: "Feb",
    amount: 7000,
  },
  {
    month: "Mar",
    amount: 9000,
  },
  {
    month: "Apr",
    amount: 12000,
  },
  {
    month: "May",
    amount: 15000,
  },
];

export default function DonationChart() {
  return (
    <div
      style={{
        width: "100%",
        height: 350,
        background: "#fff",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <ResponsiveContainer>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="month" />

          <YAxis />

          <Tooltip />

          <Line
            type="monotone"
            dataKey="amount"
            stroke="#2563eb"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
