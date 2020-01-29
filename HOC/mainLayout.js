
const mainLayout =({ page }) => Page => {
    return () => (
    <>
        <div className="container">
            <header className="headster">
                <h1 className="headster__text-box">{page}</h1>
            </header>
        
            <div className="content">
                <Page />
            </div>

    </div>

    </>
    )
}

export default mainLayout