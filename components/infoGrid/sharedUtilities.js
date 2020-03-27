export const renderCellContent = (cellValue, key) => {
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
      return <TotalCasesPer1mPopul>{formatNumber(value)}</TotalCasesPer1mPopul>;
      break;
    case 'tot_deaths_per_1m_pop':
      return <TotalDeathPer1mPopul>{formatNumber(value)}</TotalDeathPer1mPopul>;
      break;
    default:
    // code block
  }
};
