import Component from "./Component";
import style from "./Header.module.scss";

const templateIds =  {
  burgerButton: 'burgerButton'
};

export default class Header<IHeaderProp> extends Component {
  constructor(props: IHeaderProp) {
    super(props);
    this.state = {
      menuItems: [
        {
          titel: "Home",
          url: "/",
        },
        {
          titel: "About",
          url: "/about",
        },
        {
          titel: "Contact",
          url: "/contact",
        }
      ]
    };
  }
  public render() {
    return (
      <header className={`${style.header} d-md-flex mt-2`}>
        <input type="checkbox" id={`${templateIds.burgerButton}`} className={`d-none`}></input>
        <label className={`d-flex align-items-center justify-content-center my-3 ms-md-3`} htmlFor={templateIds.burgerButton}>
          <h1 className="m-0 text-align-center">Website name</h1>
          <div className={`${style.burgerMenu} d-md-none ms-3`}></div>
        </label>
        <nav className={`${style.navigation} d-md-block`}>
          <ul className={`d-md-flex align-items-md-center ps-0 ps-md-2 m-auto`}>
            {this.state.menuItems.map((menuItem, index) => 
              <li className={`btn me-2 my-4 d-block`} key={index}>
                <a className={`${style.menuLink} p-3`} href={menuItem.url}>{menuItem.titel}</a>
              </li>
            )}
          </ul>
        </nav>
      </header>
    );
  }
  state : {menuItems: IMenuItem[]} = {
    menuItems: []
  }
}

interface IMenuItem{
  titel: string;
  url: string;
}

export interface IHeaderProp{

}
