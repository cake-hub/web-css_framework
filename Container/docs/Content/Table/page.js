import React from "react";
import Table from "@Develop/Content/Table/table.html.js";

const TableDefault = () => (
    <Table>
        <tbody>
            <tr>
                <td>Table content</td>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
            <tr>
                <td>Table content</td>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
            <tr>
                <td>Table content</td>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
        </tbody>
    </Table>
);

const TableWithColumnHeader = () => (
    <Table>
        <thead>
            <tr>
                <th>Column head</th>
                <th>Column head</th>
                <th>Column head</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Table content</td>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
            <tr>
                <td>Table content</td>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
        </tbody>
    </Table>
);


const TableWithRowHeader = () => (
    <Table>
        <tbody>
            <tr>
                <th>Row head</th>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
            <tr>
                <th>Row head</th>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
            <tr>
                <th>Row head</th>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
        </tbody>
    </Table>
);

const TableWithMultipleHeader = () => (
    <Table>
        <thead>
            <tr>
                <th>Column head</th>
                <th>Column head</th>
                <th>Column head</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>Row head</th>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
            <tr>
                <th>Row head</th>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
        </tbody>
    </Table>
);


const TableWithVerticalBackground = () => (
    <Table className="table-striped-v">
        <tbody>
            <tr>
                <td>Table content</td>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
            <tr>
                <td>Table content</td>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
            <tr>
                <td>Table content</td>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
        </tbody>
    </Table>
);

const TableWithHorizontalBackground = () => (
    <Table className="table-striped">
        <tbody>
            <tr>
                <td>Table content</td>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
            <tr>
                <td>Table content</td>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
            <tr>
                <td>Table content</td>
                <td>Table content</td>
                <td>Table content</td>
            </tr>
        </tbody>
    </Table>
);


const TableResponsive = () => (
    <div className="table-responsive">
        <Table>
            <tbody>
                <tr>
                <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                </tr>
                <tr>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                </tr>
                <tr>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                    <td>Table content</td>
                </tr>
            </tbody>
        </Table>
    </div>
);

export default {
    TableDefault,
    TableWithColumnHeader,
    TableWithRowHeader,
    TableWithMultipleHeader,
    TableWithVerticalBackground,
    TableWithHorizontalBackground,
    TableResponsive
};
