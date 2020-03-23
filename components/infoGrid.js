import React, {useState, useCallback} from 'react';
import {Grid, ScrollSync, AutoSizer} from 'react-virtualized';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';

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

  evenRow: {},
  oddRow: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  cell: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0 0.5em',
  },

  headerCell: {
    fontWeight: 'bold',
  },
  leftCell: {
    fontWeight: 'bold',
  },
});

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
const LEFT_COLOR_FROM = hexToRgb('#471061');
const LEFT_COLOR_TO = hexToRgb('#BC3959');
const TOP_COLOR_FROM = hexToRgb('#000000');
const TOP_COLOR_TO = hexToRgb('#333333');

function mixColors(color1, color2, amount) {
  const weight1 = amount;
  const weight2 = 1 - amount;

  const r = Math.round(weight1 * color1.r + weight2 * color2.r);
  const g = Math.round(weight1 * color1.g + weight2 * color2.g);
  const b = Math.round(weight1 * color1.b + weight2 * color2.b);

  return {r, g, b};
}

export default function App() {
  const styles = useStyles();
  const [state, setState] = useState({
    columnWidth: 75,
    columnCount: 50,
    height: 300,
    overscanColumnCount: 0,
    overscanRowCount: 5,
    rowHeight: 40,
    rowCount: 100,
  });

  const {
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
        {`C${columnIndex}`}
      </div>
    );
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
    const classNames = clsx(rowClass, styles.cell);

    return (
      <div className={classNames} key={key} style={style}>
        {`R${rowIndex}, C${columnIndex}`}
      </div>
    );
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
        console.log({
          clientHeight,
          clientWidth,
          onScroll,
          scrollHeight,
          scrollLeft,
          scrollTop,
          scrollWidth,
        });

        console.log({
          y,
        });

        const leftBackgroundColor = mixColors(
          LEFT_COLOR_FROM,
          LEFT_COLOR_TO,
          y,
        );
        const leftColor = '#ffffff';
        const topBackgroundColor = mixColors(TOP_COLOR_FROM, TOP_COLOR_TO, x);
        const topColor = '#ffffff';
        const middleBackgroundColor = mixColors(
          leftBackgroundColor,
          topBackgroundColor,
          0.5,
        );
        const middleColor = '#ffffff';

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
                columnCount={1}
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
                columnWidth={columnWidth}
                columnCount={1}
                className={styles.LeftSideGrid}
                height={height}
                rowHeight={rowHeight}
                rowCount={rowCount}
                scrollTop={scrollTop}
                width={columnWidth}
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
                        rowCount={rowCount}
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
