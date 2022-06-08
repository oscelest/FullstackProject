import Style from "./index.module.scss";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {withTranslation, WithTranslation} from "next-i18next";
import Component from "../components/application/Component";
import {NextPageContext} from "next";
import 'bootstrap/dist/css/bootstrap.min.css';

export async function getServerSideProps(context: NextPageContext) {
  return {props: await serverSideTranslations(context.locale ?? context.defaultLocale ?? "en", ["common"])};
}

class IndexPage extends Component<IndexPageProps,IndexState> {
  public render() {
    return (
      <div className={`col-8 mx-auto mt-5 shadow p-4 mb-5 bg-white rounded`}>
        <h1> Counter: {this.state.counter}</h1> 
        <button type="button" className="btn btn-success mx-2 p-3" onClick={this.incrementCounter}>Increment</button>
        <button type="button" className="btn btn-danger mx-2 p-3" onClick={this.decrementCounter}>Decrement</button>
      </div>
    );
  }

  constructor(props: IndexPageProps) {
    super(props);

    this.state = {
      counter: 0,
    }
  }

  incrementCounter = () => { this.setState({counter: this.state.counter + 1}) }
  decrementCounter = () => { this.setState({counter: this.state.counter - 1}) }
  
}

export interface IndexPageProps extends WithTranslation {
  children?: never;
}

interface IndexState{
  counter: number;
}

export default withTranslation("common")(IndexPage);
