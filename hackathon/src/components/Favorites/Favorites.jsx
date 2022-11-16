import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//custom
import { useFavorites } from "../../contexts/FavoritesContextProvider";
import { Button, TextField, Typography } from "@mui/material";

export default function Favorites() {
  const { getFavorites, favorites, deleteProductInFavorites } = useFavorites();

  React.useEffect(() => {
    getFavorites();
  }, []);

  function favoritesCleaner() {
    localStorage.removeItem("favorites");
    getFavorites();
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Picture</TableCell>
            <TableCell align="right">Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {favorites?.products.map(row => (
            <TableRow
              key={row.item.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell>
                <img src={row.item.picture} alt="" width="50" />
              </TableCell>
              <TableCell align="right">{row.item.name}</TableCell>

              <TableCell align="right">
                <button onClick={() => deleteProductInFavorites(row.item.id)}>
                  Delete From Favorites
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
