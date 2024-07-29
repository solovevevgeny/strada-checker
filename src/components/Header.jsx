import ThemeSwitcher from "./ThemeSwitcher"

export const Header = () => {



return (
    <section className="header">
        <div className="container header">
            <div className="header__name">
                Herolegue slots checker 0.3.3
            </div>

            <div className="header__themeswitcher">
                <ThemeSwitcher />
            </div>
        </div>
    </section>
)

}

export default Header