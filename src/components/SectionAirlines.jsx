function SectionAirlines() {
    return (
        <section className='section-airlines'>
        <div className='content'>
          <div className='airlines'>
            <h3 className='section-subtitle'>Search for other Top Airlines</h3>
            <div className='airlines__columns'>
              <ul className='airlines__column'>
                <div className='airlines__item'>
                  <div className='airlines__photo biman'></div>
                  <span className='airlines__airline'>Biman BD Airline</span>
                </div>
                <div className='airlines__item'>
                  <div className='airlines__photo badal'></div>
                  <span className='airlines__airline'>Badal Airline</span>
                </div>
                <div className='airlines__item'>
                  <div className='airlines__photo raza'></div>
                  <span className='airlines__airline'>Raza Airline</span>
                </div>
              </ul>
              <ul className='airlines__column'>
                <div className='airlines__item'>
                  <div className='airlines__photo hello-int'></div>
                  <span className='airlines__airline'>Hello Int. Airlines</span>
                </div>
                <div className='airlines__item'>
                  <div className='airlines__photo pakistan'></div>
                  <span className='airlines__airline'>Pakistan International Airlines</span>
                </div>
                <div className='airlines__item'>
                  <div className='airlines__photo hello-international'></div>
                  <span className='airlines__airline'>Hello International Airlines</span>
                </div>
              </ul>
              <div className='airlines__tourist'></div>
            </div>
          </div>
        </div>
      </section>
    )
}
export default SectionAirlines;