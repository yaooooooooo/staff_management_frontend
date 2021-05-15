import React from "react";
import PropTypes from "prop-types";
import Tooltip from "../Tooltip";
import './index.css'

const Table = ({columns, data}) => {
    return (
        <table className="user-table" cellSpacing="0" cellPadding="0">
            <thead>
            <tr>
                {
                    columns.map((item, index) => {
                        return (<th key={index} width={item.width}>{item.title}</th>)
                    })
                }
            </tr>
            </thead>
            {data?.length ?
                <tbody>
                {
                    data?.map((tbodyItem) => {
                        return (
                            <tr key={`${tbodyItem.name}`}>
                                {columns.map(({title, name, Cell, width}, i) => {
                                    if (Cell) {
                                        return <td width={width} key={`${tbodyItem.name}`}>{Cell(tbodyItem)}</td>
                                    }
                                    return (
                                        <td width={width} key={`${i}_${tbodyItem.name}`}>
                                            <Tooltip text={tbodyItem[name]}>
                                                <span style={{width: `${width}px`}}>{tbodyItem[name]}</span>
                                            </Tooltip>
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })
                }
                </tbody> :
                <tbody></tbody>
            }
        </table>
    );
};

Table.propTypes = {
    columns: PropTypes.array,
    data: PropTypes.array,
}

export default Table;