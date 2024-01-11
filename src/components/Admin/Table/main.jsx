// MATERIAL UI
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbar, GridToolbarContainer } from "@mui/x-data-grid";

const columns = [
  {
    flex: 1,
    field: "id",
    headerName: "ID",
    headerClassName: "table_header",
  },
  {
    flex: 1,
    field: "firstName",
    headerName: "Fecha",
    headerClassName: "table_header",
  },
  {
    flex: 1,
    field: "lastName",
    headerName: "Nombre",
    headerClassName: "table_header",
  },
  {
    flex: 1,
    type: "number",
    field: "age",
    headerAlign: "left",
    headerName: "Cantidad",
    headerClassName: "table_header",
  },
  {
    flex: 1,
    field: "fullName",
    sortable: false,
    headerName: "Formt",
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    headerClassName: "table_header",
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 14 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 31 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 31 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 11 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

function AddToolbar() {
  const handleClick = () => {};

  return (
    <>
      <GridToolbarContainer>
        <Button variant="contained" color="primary" onClick={handleClick}>
          Add record
        </Button>
      </GridToolbarContainer>
    </>
  );
}

export default function Table() {
  return (
    <Box sx={{ height: 430, width: "100%" }}>
      <DataGrid
        sx={{
          padding: "5px",
          boxShadow: `2.8px 2.8px 2.2px rgba(0, 0, 0, 0.02),
        6.7px 6.7px 5.3px rgba(0, 0, 0, 0.028),
        12.5px 12.5px 10px rgba(0, 0, 0, 0.035),
        22.3px 22.3px 17.9px rgba(0, 0, 0, 0.042),
        41.8px 41.8px 33.4px rgba(0, 0, 0, 0.05),
        100px 100px 80px rgba(0, 0, 0, 0.07)`,
          "& .table_header": {
            fontSize: "1.2rem",
          },
        }}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        disableRowSelectionOnClick
        slots={{
          toolbar: GridToolbar,
        }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
          },
        }}
      />
    </Box>
  );
}
