import Header from '../components/Header'

const welcomeLayout = Page => {
    return () => (
        <>
        <style jsx>{`
        .header {
          height: 95vh;
          background-image: linear-gradient(
            rgba(30, 144, 255, 0.5),
            rgba(0, 116, 228, 0.5)
            ),
            url(../../static/mountain2.jpg);
          background-repeat: repeat-x; 
          background-size: cover;
          background-position: top;
          position: relative; 
      }

      @media screen and (max-width: 700px) {
        .header{
            background-image: linear-gradient(
                rgba(30, 144, 255, 0.5),
                rgba(0, 116, 228, 0.5)
                ),
                url(../../static/mountain2_phone.jpg);
        }
      }
      `}</style>
      <main>
        <div className="container">
          <header className="header">
            <div className="header__text-box">
              <h1 className="heading-primary">
                <span className="heading-primary--main">Craig MacRitchie</span>
                <div className="heading-primary--container">
                  <div className="heading-primary--sub heading-primary--sub--1">Full-Stack Developer</div>
                  <div className="heading-primary--sub heading-primary--sub--2">Data Scientist</div>
                  <div className="heading-primary--sub heading-primary--sub--3">Engineer in Training</div>
                </div>
              </h1>
              <Page />
            </div>
          </header>
        </div>
      </main>
    </>
    )
}

export default welcomeLayout