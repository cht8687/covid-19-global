import React, {useState, useCallback} from 'react';
import {Grid, ScrollSync, AutoSizer} from 'react-virtualized';
import colours from '../styles/colours';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import ReactCountryFlag from 'react-country-flag';
import {GRID_HEADER} from '../const/GridHeader';
import styled from 'styled-components';
import getCountryName from '../const/isoToName';
import formatNumber from '../utilities/formatNumber';
import getValueFromArray from '../utilities/getValueFromArray';
import {
  ConfirmedColor,
  NewCasesColor,
  DeceasedColor,
  NewDeceasedColor,
  ActiveColor,
  RecoveredColor,
  SeriousColor,
  Per1mPopulation,
} from '../styles/sharedStyle';
import {pipe, toPairs, map, of, fromPairs, keys, values} from 'ramda';

const useStyles = makeStyles({
  GridRow: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
  },
  GridColumn: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
  },
  LeftSideGridContainer: {
    flex: '0 0 75px',
    zIndex: '10',
  },

  LeftSideGrid: {
    overflow: 'hidden !important',
  },
  HeaderGrid: {
    width: '100%',
    overflow: 'hidden !important',
  },
  BodyGrid: {
    width: '100%',
  },
  evenRow: {
    backgroundColor: `${colours.deepBlue}`,
  },
  oddRow: {
    backgroundColor: `${colours.deepBlue}`,
  },
  cell: {
    fontSize: '0.875em',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'center',
    padding: '0 0.5em',
  },
  headerCell: {
    fontSize: '0.875em',
    fontWeight: 'bold',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: '0 0.5em',
    background: colours.deepPurple,
  },
  leftCell: {
    fontSize: '0.875em',
    fontWeight: 'bold',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 0.5em',
    whiteSpace: 'nowrap',
    backgroundColor: colours.darkBlue,
  },
});

const Container = styled.div``;

const TotalCase = styled.div`
  ${ConfirmedColor}
`;

const NewCase = styled.div`
  ${NewCasesColor}
`;

const TotalDeceased = styled.div`
  ${DeceasedColor}
`;

const NewDeceased = styled.div`
  ${NewDeceasedColor}
`;

const ActiveCases = styled.div`
  ${ActiveColor}
`;

const SeriousCases = styled.div`
  ${SeriousColor}
`;

const TotalRecovered = styled.div`
  ${RecoveredColor}
`;

const TotalCasesPer1mPopul = styled.div`
  ${Per1mPopulation}
`;

const TotalDeathPer1mPopul = styled.div`
  ${DeceasedColor}
`;

const CountryCell = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
}
`;

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}
const LEFT_COLOR_FROM = hexToRgb(`${colours.darkBlue}`);
const LEFT_COLOR_TO = hexToRgb(`${colours.darkBlue}`);
const TOP_COLOR_FROM = hexToRgb(`${colours.darkBlue}`);
const TOP_COLOR_TO = hexToRgb(`${colours.darkBlue}`);

function mixColors(color1, color2, amount) {
  const weight1 = amount;
  const weight2 = 1 - amount;

  const r = Math.round(weight1 * color1.r + weight2 * color2.r);
  const g = Math.round(weight1 * color1.g + weight2 * color2.g);
  const b = Math.round(weight1 * color1.b + weight2 * color2.b);

  return {r, g, b};
}

export default function InfoGrid({data}) {
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
        {GRID_HEADER[columnIndex]}
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

    const country = getValueFromArray('country')(displayList[rowIndex]);
    const countryCode = getValueFromArray('country_code')(
      displayList[rowIndex],
    );

    if (columnIndex < 1) {
      return (
        <div className={classNames} key={key} style={style}>
          {countryCode === 'TOT' ? (
            `🌏  `
          ) : (
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
      {({
        clientHeight,
        clientWidth,
        onScroll,
        scrollHeight,
        scrollLeft,
        scrollTop,
        scrollWidth,
      }) => {
        const x = scrollLeft / (scrollWidth - clientWidth);
        const y = scrollTop / (scrollHeight - clientHeight);
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
