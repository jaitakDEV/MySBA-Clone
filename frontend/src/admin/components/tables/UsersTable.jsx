import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "ID",
    width: 90,
  },

  {
    field: "name",
    headerName: "Name",
    width: 200,
  },

  {
    field: "email",
    headerName: "Email",
    width: 250,
  },

  {
    field: "role",
    headerName: "Role",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    role: "Admin",
  },

  {
    id: 2,
    name: "Jane Smith",
    email: "jane@gmail.com",
    role: "User",
  },
];

export default function UsersTable() {
  return (
    <div
      style={{
        height: 500,
        width: "100%",
        background: "#fff",
        borderRadius: "20px",
        padding: "10px",
      }}
    >
      <DataGrid rows={rows} columns={columns} pageSize={5} />
    </div>
  );
}
