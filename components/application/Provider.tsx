import React from "react";

const Context = React.createContext({});

class Provider extends React.Component<ProviderProps, State> {

  constructor(props: ProviderProps) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  public componentDidMount = async () => {
    this.setState({loading: false});
  };

  public render = () => {
    const next = new Provider(this.props) as NextProvider;
    for (let key in this) {
      if (this.hasOwnProperty(key)) {
        next[key as keyof Provider] = this[key];
      }
    }

    return (
      <Context.Provider value={next}>
        {this.props.children}
      </Context.Provider>
    );
  };
}

type NextProvider = { -readonly [K in keyof Provider]: Provider[K] }

export interface ProviderProps {

}

export interface State {
  loading: boolean;
}

export default Provider;
