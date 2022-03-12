import App from "next/app";
import Head from "next/head";
import Provider from "../components/application/Provider";
import Header from "../components/application/Header";
import Content from "../components/application/Content";
import Footer from "../components/application/Footer";
import "../public/style.scss";
import {appWithTranslation} from "next-i18next";

class Application extends App {

  public render() {
    return (
      <Provider>
        <Head>
          <title>Fullstack Project</title>
          <meta charSet="UTF-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>

          <meta property="og:title" content="Noxy.io"/>
          <meta property="og:description" content="Something coming soon™"/>
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://noxy.io/"/>
          <meta property="og:image" content="https://noxy.io/static/preview.png"/>

          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico"/>
        </Head>
        <Header/>
        <Content>
          <this.props.Component {...this.props.pageProps}/>
        </Content>
        <Footer/>
      </Provider>
    );
  }
}

export default appWithTranslation(Application);
