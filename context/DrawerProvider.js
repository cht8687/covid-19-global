import React, {Component} from 'react';

const DrawerContext = React.createContext();

class DrawerProvider extends Component {
  state = {
    open: false,
  };

  render() {
    return (
      <DrawerContext.Provider
        value={{
          open: this.state.open,
          setOpen: flag =>
            this.setState({
              open: flag,
            }),
        }}>
        {this.props.children}
      </DrawerContext.Provider>
    );
  }
}

const DrawerConsumer = DrawerContext.Consumer;

export default DrawerProvider;
export {DrawerConsumer};
