import colours from '../../styles/colours';
import {makeStyles} from '@material-ui/core/styles';
import styled from 'styled-components';
import {
  ConfirmedColor,
  NewCasesColor,
  DeceasedColor,
  NewDeceasedColor,
  ActiveColor,
  RecoveredColor,
  SeriousColor,
  Per1mPopulation,
} from '../../styles/sharedStyle';

/*--- I confess, I took a lot shot cuts...
 * shouldn't have both makeStyles and styled components
 */
export const useStyles = makeStyles({
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
    backgroundColor: colours.deepBlue,
  },
  oddRow: {
    backgroundColor: colours.deepBlue,
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
    fontSize: '0.775em',
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

export const TotalCase = styled.div`
  ${ConfirmedColor}
`;

export const NewCase = styled.div`
  ${NewCasesColor}
`;

export const TotalDeceased = styled.div`
  ${DeceasedColor}
`;

export const NewDeceased = styled.div`
  ${NewDeceasedColor}
`;

export const ActiveCases = styled.div`
  ${ActiveColor}
`;

export const SeriousCases = styled.div`
  ${SeriousColor}
`;

export const TotalRecovered = styled.div`
  ${RecoveredColor}
`;

export const TotalCasesPer1mPopul = styled.div`
  ${Per1mPopulation}
`;

export const TotalDeathPer1mPopul = styled.div`
  ${DeceasedColor}
`;
