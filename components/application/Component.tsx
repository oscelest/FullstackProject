import React from "react";
import Provider from "./Provider";

// This overrides the default React component to allow us to access the global context provider from anywhere.
class Component<P = {}, S = {}> extends React.Component<P, S> {

  public static contextType = React.createContext({});
  public context: Context = this["context"];

}

type Context = Omit<Provider, Exclude<keyof React.Component, "state" | "setState">>;

export default Component;
