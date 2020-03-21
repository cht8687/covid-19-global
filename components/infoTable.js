import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import styled from 'styled-components';
import colours from '../styles/colours';
import Paper from '@material-ui/core/Paper';
import {AutoSizer, Column, Table} from 'react-virtualized';

const styles = theme => ({
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
    boxSizing: 'border-box',
  },
  table: {
    // temporary right-to-left patch, waiting for
    // https://github.com/bvaughn/react-virtualized/issues/454
    '& .ReactVirtualized__Table__headerRow': {
      flip: false,
      paddingRight: theme.direction === 'rtl' ? '0px !important' : undefined,
    },
  },
  tableRow: {
    cursor: 'pointer',
  },
  tableRowHover: {
    '&:hover': {
      backgroundColor: theme.palette.grey[200],
    },
  },
  tableCell: {
    flex: 1,
    color: `${colours.dimWhite}`,
    fontWeight: 'bold',
  },
  noClick: {
    cursor: 'initial',
  },
});

const Container = styled.div``;

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: 48,
    rowHeight: 48,
  };

  getRowClassName = ({index}) => {
    const {classes, onRowClick} = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({cellData, columnIndex}) => {
    const {columns, classes, rowHeight, onRowClick} = this.props;
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{height: rowHeight}}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? 'right'
            : 'left'
        }>
        {cellData}
      </TableCell>
    );
  };

  headerRenderer = ({label, columnIndex}) => {
    const {headerHeight, columns, classes} = this.props;

    return (
      <TableCell
        component="div"
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick,
        )}
        variant="head"
        style={{height: headerHeight}}
        align={columns[columnIndex].numeric || false ? 'right' : 'left'}>
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const {
      classes,
      columns,
      rowHeight,
      headerHeight,
      ...tableProps
    } = this.props;
    return (
      <AutoSizer>
        {({height, width}) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: 'inherit',
            }}
            headerHeight={headerHeight}
            className={classes.table}
            {...tableProps}
            rowClassName={this.getRowClassName}>
            {columns.map(({dataKey, ...other}, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={headerProps =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    }),
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = withStyles(styles)(MuiVirtualizedTable);

export default function ReactVirtualizedTable({data, isLoading}) {
  if (isLoading) return null;
  return (
    <Container style={{height: 600, width: '100%'}}>
      {data && data.length ? (
        <VirtualizedTable
          rowCount={data.length}
          rowGetter={({index}) => data[index]}
          columns={[
            {
              width: 120,
              label: 'Country',
              dataKey: 'country',
            },
            {
              width: 120,
              label: 'Confirmed',
              dataKey: 'total_cases',
              numeric: true,
            },
            {
              width: 120,
              label: 'Active',
              dataKey: 'active_cases',
              numeric: true,
            },
            {
              width: 120,
              label: 'Deceased',
              dataKey: 'total_deaths',
              numeric: true,
            },
            {
              width: 120,
              label: 'Recovered',
              dataKey: 'total_recovered',
              numeric: true,
            },
          ]}
        />
      ) : null}
    </Container>
  );
}
