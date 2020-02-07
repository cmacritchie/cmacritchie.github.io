
const blocksLayout =({ page }) => Page => {
    return () => (
    <>
        <div className="section-content">
            <header className="headster">
                <h1 className="headster__text-box">{page}</h1>
                <div className="underline"></div>
            </header>
        
            <div className="content">
                <div>
                <Page />
                </div>  
            </div>
        </div>

    </>
    )
}

export default blocksLayout