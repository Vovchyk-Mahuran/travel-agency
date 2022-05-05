function Btn({
    title,
    btnClassName,
    bg
}) {
    return (
        <div>
            <button className={`${btnClassName}`} style={{ backgroundColor: bg }}>{title}</button>
        </div>
    )
}
export default Btn;