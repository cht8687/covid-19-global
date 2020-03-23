export default `
.detail {
  width: calc(100% - 40px);
  height: calc(100% - 40px);
}

.sticky-grid__header {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  z-index: 3;
}

.sticky-grid__header__base {
  z-index: 3;
  background: coral;
  position: sticky;
  left: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 4px;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
}

.sticky-grid__header__scrollable {
  position: absolute;
}

.sticky-grid__header__scrollable__column {
  position: absolute;
  background-color: lightblue;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 4px;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
}

.sticky-grid__sticky-columns__container {
  position: sticky;
  left: 0;
  z-index: 2;
  background: lightblue;
  width: min-content;
}

.sticky-grid__sticky-columns__row {
  position: absolute;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  border-bottom: 1px solid gray;
  border-right: 1px solid gray;
}

.sticky-grid__data__container {
  position: absolute;
}

.sticky-grid__data__column {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
}


`;
