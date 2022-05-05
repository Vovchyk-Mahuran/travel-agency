function Facility({
    facilityClassName,
    title
}) {
    return (
        <div className='cards__item'>
            <a href='/' className={`cards__photo ${facilityClassName}`} ></a>
            <a href='/' className='cards__title'>{title}</a>
        </div>
    )
}
export default Facility;