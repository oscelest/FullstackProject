import Component from "./Component";
import Style from "./Content.module.scss";

class Content extends Component<ContentProps, State> {

  public render() {
    return (
      <div className={Style.Component}>
        {this.props.children}
      </div>
    );
  }
}

export interface ContentProps {

}

interface State {

}

export default Content;
