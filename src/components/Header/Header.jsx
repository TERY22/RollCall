import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img className={s.header__img} src="https://image.flaticon.com/icons/png/512/3698/3698156.png" alt="logo"/>
            <span className={s.header__name}>RollCall</span>
        </header>
    )
}

export default Header;