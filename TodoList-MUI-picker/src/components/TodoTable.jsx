// TodoTable.jsx
import React from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

const TodoTable = ({ todos, gridRef }) => {
    const columnDefs = [
        { headerName: "Description", field: "description", sortable: true, filter: true },
        { headerName: "Priority", field: "priority", sortable: true, filter: true, cellStyle: params => params.value === "high" ? { color: 'red' } : { color: 'blue' } },
        { headerName: "Date", field: "date", sortable: true, filter: true },
    ];

    return (
        <div className="ag-theme-material" style={{ height: 400, width: 750 }}>
            <AgGridReact
                ref={gridRef}
                onGridReady={ params => gridRef.current = params.api }
                rowData={todos}
                columnDefs={columnDefs}
                rowSelection="single"
            />
        </div>
    );
}

export default TodoTable;
