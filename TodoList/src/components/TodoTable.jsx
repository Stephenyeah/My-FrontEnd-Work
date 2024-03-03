// TodoTable.js
import React from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-material.css";

function TodoTable({ todos, handleDelete }) {
    const columnDefs = [
        { headerName: "Description", field: "description", sortable: true, filter: true },
        { headerName: "Priority", field: "priority", sortable: true, filter: true, cellStyle: params => params.value === "high" ? { color: 'red' } : { color: 'blue' } },
        { headerName: "Date", field: "date", sortable: true, filter: true }
    ];

    return (
        <div className="ag-theme-material" style={{ height: 500, width: 650 }}>
            <AgGridReact
                rowData={todos}
                columnDefs={columnDefs}
            />
        </div>
    );
}

export default TodoTable;
