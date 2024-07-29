import { useDispatch } from "react-redux"
import ThemeSwitcher from "./ThemeSwitcher"
import { changeSeed } from "../store/applicationSlice";
import { IoRefreshOutline } from "react-icons/io5";


export const Header = () => {

const dispatch = useDispatch();

return (
    <section className="header">
        <div className="container header">
            <div className="header__refresh" onClick={()=>dispatch(changeSeed())}>
                <IoRefreshOutline style={{fontSize: '1.5em'}} />
                Обновить
            </div>

            <div className="header__name">
                Herolegue slots checker 0.3.4
            </div>

            <div className="header__themeswitcher">
                <ThemeSwitcher />
            </div>
        </div>
    </section>
)

}

export default Header