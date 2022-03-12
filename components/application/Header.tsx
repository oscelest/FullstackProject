import Component from "./Component";
import Style from "./Header.module.scss";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {withTranslation, WithTranslation} from "next-i18next";

class Header extends Component<HeaderProps, State> {

  public render() {
    return (
      <div className={Style.Component}>
        {this.props.t("Header_Title")}
      </div>
    );
  }
}

export interface HeaderProps extends WithTranslation {
  children?: never;
}

interface State {

}

export default withTranslation("common")(Header);
