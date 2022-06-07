import Component from "./Component";
import Style from "./Footer.module.scss";
import {withTranslation, WithTranslation} from "next-i18next";

class Footer extends Component<FooterProps, State> {

  public render() {
    return (
        <div></div>
    );
  }
}

export interface FooterProps extends WithTranslation {
  children?: never;
}

interface State {

}

export default withTranslation("common")(Footer);
