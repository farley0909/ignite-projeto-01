import style from './Sidebar.module.css'

export function Sidebar(){
    return (
        <aside className={style.sidebar}>
            <img className={style.cover} src="https://images.unsplash.com/photo-1675789358578-870c3b20d907?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1175&q=80" />
            <div className={style.profile}>
                <strong>João da Silva</strong>
                <span>Web Developer</span>   
            </div>
            <footer>
                <a href="#">
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}