import MainButtons from '../../MainButtons';
export default function WhiteNav(){
    return(
        <div className={}>
            <img
              onClick={() => ScrollTop()}
              className={style.logo}
              src="assets/images/main_images/logo.svg"
            />
            <div className="col-md-6">
            <ul className={style.navList}>
              {NavItems.map((item) => (
                <li key={item.title}>
                  <button onClick={() => Go(item.url)}>{item.title}</button>
                </li>
              ))}
            </ul>
          </div>
          <MainButtons
                t={t}
                reasonsKey="BUTTON"
              />
        </div>
    )
}