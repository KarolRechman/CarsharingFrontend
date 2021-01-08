import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import api from "../actions/api";
import { DataGrid } from '@material-ui/data-grid';


const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'userName', headerName: 'User Name', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 }
  // ,{
  //   field: 'age',
  //   headerName: 'Age',
  //   type: 'number',
  //   width: 90,
  // },
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
  // },
];




const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));


function renameKey(obj, oldKey, newKey) {
  obj[newKey] = obj[oldKey];
  delete obj[oldKey];
}

export const UsersGridList = (props) => {
  const classes = useStyles();
  const [usersList, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const request = await api.user().fetchAll();
      console.log(request.data);

      const updatedJson = request.data.map(({ idCar: id}) => ({
        id
      }));

      setData(updatedJson);
      console.log(request.data);
    };

    fetchData();
  }, []);
  return (
    <div style={{ height: 400, width: '100%', marginTop: "100px" }}>
      <DataGrid rows={usersList} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}


