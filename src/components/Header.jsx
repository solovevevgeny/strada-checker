import ThemeSwitcher from "./ThemeSwitcher"

export const Header = () => {



return (
    <section class="header">
        <div class="container header">
            <div class="header__name">
                Herolegue slots checker
            </div>

            <div class="header__themeswitcher">
                <ThemeSwitcher />
            </div>
        </div>
    </section>
)

}

export default Header