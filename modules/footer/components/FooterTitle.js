import style from './info.module.scss';
export default function FooterTitle(){
    return(
        <div className="col-md-3">
            <img src="/assets/images/footer_images/LogoChat.png"></img>
            <p className={style.forgeChat}>Forge:chat</p>
        </div>
    )
}