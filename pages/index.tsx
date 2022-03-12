import Style from "./index.module.scss";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {withTranslation, WithTranslation} from "next-i18next";
import Component from "../components/application/Component";
import {NextPageContext} from "next";

export async function getServerSideProps(context: NextPageContext) {
  return {props: await serverSideTranslations(context.locale ?? context.defaultLocale ?? "en", ["common"])};
}

class IndexPage extends Component<IndexPageProps, State> {

  public render() {
    return (
      <div className={Style.Component}>
        {this.props.t("IndexPage_Content")}
      </div>
    );
  }
}

export interface IndexPageProps extends WithTranslation {
  children?: never;
}

interface State {

}

export default withTranslation("common")(IndexPage);
