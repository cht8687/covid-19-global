import React, {useState, useCallback} from 'react';
import formatNumber from '../../utilities/formatNumber';
import {Grid, ScrollSync, AutoSizer} from 'react-virtualized';
import colours from '../../styles/colours';
import clsx from 'clsx';
import ReactCountryFlag from 'react-country-flag';
import {GRID_HEADER} from '../../const/GridHeader';
import styled from 'styled-components';
import getCountryName from '../../const/isoToName';
import getValueFromArray from '../../utilities/getValueFromArray';
import formatCell from '../../utilities/formatCellValue';

import {
  pipe,
  toPairs,
  map,
  of,
  fromPairs,
  flatten,
  keys,
  values,
  head,
  compose,
} from 'ramda';
import {
  useStyles,
  TotalCase,
  NewCase,
  TotalDeceased,
  NewDeceased,
  ActiveCases,
  SeriousCases,
  TotalRecovered,
  TotalCasesPer1mPopul,
  TotalDeathPer1mPopul,
} from './sharedStyles';

const CountryCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
}
`;

export default function WorldGrid({data}) {
  if (!data) return null;
  const {total, list} = data;
  const toIndividualKeys = pipe(toPairs, map(pipe(of, fromPairs)));

  const totalArray = toIndividualKeys(total);
  const countryArray = map(toIndividualKeys)(list);
  const displayList = [totalArray, ...countryArray];

  const styles = useStyles();
  const [state, setState] = useState({
    leftColumnWidth: 150,
    columnWidth: 150,
    columnCount: 10,
    height: 800,
    overscanColumnCount: 5,
    overscanRowCount: 5,
    rowHeight: 40,
    rowCount: displayList.length,
  });

  const {
    leftColumnWidth,
    columnCount,
    columnWidth,
    height,
    overscanColumnCount,
    overscanRowCount,
    rowHeight,
    rowCount,
  } = state;

  const _renderBodyCell = useCallback(({columnIndex, key, rowIndex, style}) => {
    if (columnIndex < 1) {
      return;
    }

    return _renderLeftSideCell({columnIndex, key, rowIndex, style});
  }, []);

  const _renderHeaderCell = ({columnIndex, key, rowIndex, style}) => {
    if (columnIndex < 1) {
      return;
    }

    return _renderLeftHeaderCell({columnIndex, key, rowIndex, style});
  };

  const _renderLeftHeaderCell = ({columnIndex, key, style}) => {
    return (
      <div className={styles.headerCell} key={key} style={style}>
        {GRID_HEADER[columnIndex]}
      </div>
    );
  };

  const renderCellContent = (cellValue, key) => {
    const type = keys(cellValue)[0];
    const value = values(cellValue)[0];
    switch (type) {
      case 'total_cases':
        return <TotalCase>{formatCell(value)}</TotalCase>;
        break;
      case 'new_cases':
        return <NewCase>{formatCell(value, true)}</NewCase>;
        break;
      case 'total_deaths':
        return <TotalDeceased>{formatCell(value)}</TotalDeceased>;
        break;
      case 'new_deaths':
        return <NewDeceased>{formatCell(value, true)}</NewDeceased>;
        break;
      case 'total_recovered':
        return <TotalRecovered>{formatCell(value)}</TotalRecovered>;
        break;
      case 'new_recovered':
        return <TotalRecovered>{formatCell(value, true)}</TotalRecovered>;
        break;
      case 'active_cases':
        return <ActiveCases>{formatCell(value)}</ActiveCases>;
        break;
      case 'new_active_cases':
        return <ActiveCases>{formatCell(value, true)}</ActiveCases>;
        break;
      case 'serious_critical':
        return <SeriousCases>{formatCell(value)}</SeriousCases>;
        break;
      case 'deaths_per_1m_pop':
        return <TotalCasesPer1mPopul>{formatCell(value)}</TotalCasesPer1mPopul>;
        break;
      case 'total_deaths':
        return <TotalDeceased>{formatCell(value)}</TotalDeceased>;
        break;
      case 'total_cases':
        return <TotalCase>{formatCell(value)}</TotalCase>;
        break;
      case 'tot_cases_per_1m_pop':
        return <TotalCasesPer1mPopul>{formatCell(value)}</TotalCasesPer1mPopul>;
        break;
      default:
    }
  };

  const _renderLeftSideCell = ({columnIndex, key, rowIndex, style}) => {
    const rowClass =
      rowIndex % 2 === 0
        ? columnIndex % 2 === 0
          ? styles.evenRow
          : styles.oddRow
        : columnIndex % 2 !== 0
        ? styles.evenRow
        : styles.oddRow;
    const classNames = clsx(rowClass, styles.leftCell);

    const country = getValueFromArray('country')(displayList[rowIndex]);
    const countryCode = getValueFromArray('country_code')(
      displayList[rowIndex],
    );

    if (columnIndex < 1) {
      return (
        <div className={classNames} key={key} style={style}>
          {countryCode === 'TOT'
            ? `🌏  `
            : countryCode && (
                <CountryCell>
                  {countryCode === 'DP' ? (
                    <span>🚢</span>
                  ) : (
                    <ReactCountryFlag
                      countryCode={countryCode === 'UK' ? 'GB' : countryCode}
                      style={{
                        fontSize: '1.5em',
                        lineHeight: '1.5em',
                        marginRight: '5px',
                        marginTop: '5px',
                      }}
                    />
                  )}
                </CountryCell>
              )}
          {!getCountryName(countryCode)
            ? country === 'Syria'
              ? `🇸🇾 Syria`
              : country
            : getCountryName(countryCode)}
        </div>
      );
    } else {
      return (
        <div className={classNames} key={key} style={style}>
          {renderCellContent(displayList[rowIndex][columnIndex], key)}
        </div>
      );
    }
  };

  return (
    <ScrollSync>
      {({onScroll, scrollLeft, scrollTop}) => {
        const leftBackgroundColor = colours.darkBlue;
        const leftColor = colours.white;
        const topBackgroundColor = colours.darkBlue;
        const topColor = colours.white;
        const middleBackgroundColor = colours.darkBlue;
        const middleColor = colours.white;

        return (
          <div className={styles.GridRow}>
            <div
              className={styles.LeftSideGridContainer}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                color: leftColor,
                backgroundColor: `rgb(${topBackgroundColor.r},${topBackgroundColor.g},${topBackgroundColor.b})`,
              }}>
              <Grid
                cellRenderer={_renderLeftHeaderCell}
                className={styles.HeaderGrid}
                width={columnWidth}
                height={rowHeight}
                rowHeight={rowHeight}
                columnWidth={columnWidth}
                rowCount={1}
                columnCount={GRID_HEADER.length}
              />
            </div>
            <div
              className={styles.LeftSideGridContainer}
              style={{
                position: 'absolute',
                left: 0,
                top: rowHeight,
                color: leftColor,
                backgroundColor: `rgb(${leftBackgroundColor.r},${leftBackgroundColor.g},${leftBackgroundColor.b})`,
              }}>
              <Grid
                overscanColumnCount={overscanColumnCount}
                overscanRowCount={overscanRowCount}
                cellRenderer={_renderLeftSideCell}
                columnWidth={leftColumnWidth}
                columnCount={1}
                className={styles.LeftSideGrid}
                height={height}
                rowHeight={rowHeight}
                rowCount={displayList.length}
                scrollTop={scrollTop}
                width={leftColumnWidth}
              />
            </div>
            <div className={styles.GridColumn}>
              <AutoSizer disableHeight>
                {({width}) => (
                  <div>
                    <div
                      style={{
                        backgroundColor: `rgb(${topBackgroundColor.r},${topBackgroundColor.g},${topBackgroundColor.b})`,
                        color: topColor,
                        height: rowHeight,
                        width: width,
                      }}>
                      <Grid
                        className={styles.HeaderGrid}
                        columnWidth={columnWidth}
                        columnCount={columnCount}
                        height={rowHeight}
                        overscanColumnCount={overscanColumnCount}
                        cellRenderer={_renderHeaderCell}
                        rowHeight={rowHeight}
                        rowCount={1}
                        scrollLeft={scrollLeft}
                        width={width}
                      />
                    </div>
                    <div
                      style={{
                        backgroundColor: `rgb(${middleBackgroundColor.r},${middleBackgroundColor.g},${middleBackgroundColor.b})`,
                        color: middleColor,
                        height,
                        width,
                      }}>
                      <Grid
                        className={styles.BodyGrid}
                        columnWidth={columnWidth}
                        columnCount={columnCount}
                        height={height}
                        onScroll={onScroll}
                        overscanColumnCount={overscanColumnCount}
                        overscanRowCount={overscanRowCount}
                        cellRenderer={_renderBodyCell}
                        rowHeight={rowHeight}
                        rowCount={displayList.length}
                        width={width}
                      />
                    </div>
                  </div>
                )}
              </AutoSizer>
            </div>
          </div>
        );
      }}
    </ScrollSync>
  );
}
