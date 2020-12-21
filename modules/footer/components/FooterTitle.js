import style from './info.module.scss';
export default function FooterTitle(){
    return(
        <div className="col-md-2">
            <img 
            style={{position: 'absolute', top: -20 + 'px', left: 0}}
            src="/assets/images/footer_images/LogoChat.png"></img>
            <p className={style.forgeChat}>Forge:chat</p>
        </div>
    )
}