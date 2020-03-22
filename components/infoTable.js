import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {withStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import styled, {css} from 'styled-components';
import ReactCountryFlag from 'react-country-flag';
import getCountryName from '../const/isoToName';
import colours from '../styles/colours';
import formatNumber from '../utilities/formatNumber';
import {AutoSizer, Column, Table} from 'react-virtualized';
import {
  ConfirmedColor,
  ActiveColor,
  DeceasedColor,
  RecoveredColor,
  SeriousColor,
} from '../styles/sharedStyle';

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

const TotalCase = styled.div`
  ${ConfirmedColor}
`;

const ActiveCases = styled.div`
  ${ActiveColor}
`;

const TotalDeceased = styled.div`
  ${DeceasedColor}
`;

const TotalRecovered = styled.div`
  ${RecoveredColor}
`;
const CountryCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
}
`;

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

  renderCellData = (dataKey, cellData) => {
    switch (dataKey) {
      case 'total_cases':
        return <TotalCase>{cellData}</TotalCase>;
        break;

      case 'active_cases':
        return <ActiveCases>{cellData}</ActiveCases>;
        break;

      case 'total_deaths':
        return <TotalDeceased>{cellData}</TotalDeceased>;
        break;

      case 'total_recovered':
        return <TotalRecovered>{cellData}</TotalRecovered>;
        break;
      default:
    }
  };

  cellRenderer = ({cellData, columnIndex}) => {
    const {columns, classes, rowHeight, onRowClick} = this.props;
    const element = columns[columnIndex];
    return (
      <TableCell
        component="div"
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant="body"
        style={{height: rowHeight}}
        align={
          (columnIndex != null && element.numeric) || false ? 'right' : 'left'
        }
        cellData>
        {element.dataKey === 'country_code' ? (
          cellData === 'TOT' ? (
            'Total'
          ) : (
            <CountryCell>
              <ReactCountryFlag
                countryCode={cellData}
                style={{
                  fontSize: '1.5em',
                  lineHeight: '1.5em',
                }}
              />
              {getCountryName(cellData)}
            </CountryCell>
          )
        ) : (
          this.renderCellData(element.dataKey, cellData)
        )}
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

export default function ReactVirtualizedTable({data}) {
  if (!data) return null;
  const {total, list} = data;
  const displayList = [total, ...list];
  console.log(list);
  return (
    <Container style={{height: 600, width: '100%'}}>
      {displayList && displayList.length ? (
        <VirtualizedTable
          rowCount={displayList.length}
          rowGetter={({index}) => displayList[index]}
          columns={[
            {
              width: 220,
              label: 'Country',
              dataKey: 'country_code',
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
