
const informationLayout =({ page }) => Page => {
    return () => (
    <>
        <div className="section-content">
            <header className="headster">
                <h1 className="headster__text-box">{page}</h1>
            </header>
        
            <div className="information">
                <Page />
            </div>
        </div>

    </>
    )
}

export default informationLayout