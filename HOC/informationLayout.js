
const informationLayout =({ page }) => Page => {
    return () => (
    <>
        <div className="section-content">
            <div className="headster">
                <h1 className="headster__text-box">{page}</h1>
                <div className="underline"></div>
            </div>
        
            <div className="information">
                <Page />
            </div>
        </div>

    </>
    )
}

export default informationLayout