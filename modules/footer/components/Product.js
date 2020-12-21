import style from "./info.module.scss";

export default function Product({ title, array}) {
  return (
    <div className="col-md-3">
      <div className={title == 'Product' ? style.product : style.company} >
        <div className={style.title}>{title}</div>
        <div>
          <ul className={style.list}>
            {array.map((item, i) => (
              <li key={i}>
                <a href={item.href}>{item.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
