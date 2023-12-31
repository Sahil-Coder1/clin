export const columns = [
    { field: '_id', headerName: 'ID', width: 220 },
    { field: 'name', headerName: 'Name', width: 190 },
    {
        field: 'quantity',
        headerName: 'Quantity',
        type: 'number',
        width: 160,
    },
    {
        field: 'price',
        headerName: 'Price',
        type: 'number',
        width: 160,
    },
    {
        field: 'expiryDate',
        headerName: 'ExpiryDate',
        width: 190
    },
    {
        field: 'uploadOn',
        headerName: 'Upload-On',
        width: 160
    }
];