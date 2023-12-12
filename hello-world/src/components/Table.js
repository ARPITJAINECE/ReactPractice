//second example of react-fragment linked to columns.js
import React from 'react'
import Columns from './Columns'

function Table() {
    return (
        <table>
            <tbody>
                <tr>
                    <Columns></Columns>
                </tr>
            </tbody>
        </table>
    )
}

export default Table