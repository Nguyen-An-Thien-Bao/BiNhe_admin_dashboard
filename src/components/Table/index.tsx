'use client';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Divider } from '@mui/material';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 150 },
    { field: 'name', headerName: 'Product Name', width: 150 },
    { field: 'categoryName', headerName: 'Category', width: 150 },
    { field: 'status', headerName: 'Status', width: 150 },
    { field: 'colorDesc', headerName: 'Colors', width: 150 },
    { field: 'fabric', headerName: 'Fabric', width: 150 },
    { field: 'inStock', headerName: 'In Stock', width: 150 },
    { field: 'price', headerName: 'Price', width: 150 },
];

function Table({ data, title }: { data: {}[]; title: string }) {
    return (
        <>
            <Divider orientation="horizontal" sx={{ borderBottomColor: '#fff', borderBottomWidth: 3 }} />
            <div style={{ width: '100%' }} className="py-8">
                <h2 className="mb-4 capitalize text-2xl font-semibold">{title}</h2>
                <DataGrid
                    autoHeight
                    sx={{ bgcolor: '#ccc' }}
                    initialState={{
                        pagination: { paginationModel: { pageSize: 5 } },
                    }}
                    pageSizeOptions={[5, 10, 25]}
                    rows={data}
                    columns={columns}
                />
            </div>
        </>
    );
}

export default Table;
