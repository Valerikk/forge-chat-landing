import style from './info.module.scss';

const getReasons = (key, t ) => {
  return {
    title: t('INFO.'+key+'.title'),
    product: t('INFO.'+key+'products'),
  }
}
export default function Product({reasonsKey, t}){
  const textData = getReasons(reasonsKey, t)
  const {title, product} = textData
    return(
        <div className="col-md-3">
            <div className={style.title}>{title}</div>
              <div>
                <ul className={style.list}>
                  {product.map((item) => {
                    <li><a>{item}</a></li>
                  })}
                </ul>
              </div>
          </div>
    )
}