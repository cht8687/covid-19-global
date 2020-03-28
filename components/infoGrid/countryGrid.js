import React, {useState, useCallback, useEffect} from 'react';
import {Grid, ScrollSync, AutoSizer} from 'react-virtualized';
import clsx from 'clsx';
import {SNAKE_TO_NORMAL} from '../../const/GridHeader';
import formatNumber from '../../utilities/formatNumber';
import getValueFromArray from '../../utilities/getValueFromArray';
import colours from '../../styles/colours';
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

export default function CountryGrid({data}) {
  if (!data) return null;
  const {total, list} = data;
  const toIndividualKeys = pipe(toPairs, map(pipe(of, fromPairs)));

  const totalArray = toIndividualKeys(total);
  const countryArray = map(toIndividualKeys)(list);
  const displayList = [totalArray, ...countryArray];

  const GRID_HEADER = compose(
    flatten,
    map(
      map(keys),

      head,
    ),
  )(displayList);
  console.log('changed to: ', displayList.length);

  useEffect(() => {}, []);

  const styles = useStyles();
  const [state, setState] = useState({
    leftColumnWidth: 150,
    columnWidth: 150,
    columnCount: 6,
    height: 600,
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
        {SNAKE_TO_NORMAL[GRID_HEADER[columnIndex]]
          ? SNAKE_TO_NORMAL[GRID_HEADER[columnIndex]]
          : GRID_HEADER[columnIndex]}
      </div>
    );
  };

  const renderCellContent = (cellValue, key) => {
    const type = keys(cellValue)[0];
    const value = values(cellValue)[0];
    switch (type) {
      case 'total_cases':
        return <TotalCase>{formatNumber(value)}</TotalCase>;
        break;
      case 'new_cases':
        return <NewCase>+{formatNumber(value)}</NewCase>;
        break;
      case 'total_deaths':
        return <TotalDeceased>{formatNumber(value)}</TotalDeceased>;
        break;
      case 'new_deaths':
        return <NewDeceased>+{formatNumber(value)}</NewDeceased>;
        break;
      case 'total_recovered':
        return <TotalRecovered>{formatNumber(value)}</TotalRecovered>;
        break;
      case 'active_cases':
        return <ActiveCases>{formatNumber(value)}</ActiveCases>;
        break;
      case 'serious_critical':
        return <SeriousCases>{formatNumber(value)}</SeriousCases>;
        break;
      case 'tot_cases_per_1m_pop':
        return (
          <TotalCasesPer1mPopul>{formatNumber(value)}</TotalCasesPer1mPopul>
        );
        break;
      case 'tot_deaths_per_1m_pop':
        return (
          <TotalDeathPer1mPopul>{formatNumber(value)}</TotalDeathPer1mPopul>
        );
        break;
      default:
      // code block
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

    const state = getValueFromArray('state')(displayList[rowIndex]);

    if (columnIndex < 1) {
      return (
        <div className={classNames} key={key} style={style}>
          {state}
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
