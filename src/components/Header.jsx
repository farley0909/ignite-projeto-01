import style from './Header.module.css'
import logo from '../assets/ignite-icon.svg'
export function Header(){
    return (
        <header className={style.header}> 
        <img src= {logo} alt='Logo do ignite'/>
            <strong>Ignite feed</strong>
        </header>
    )
}