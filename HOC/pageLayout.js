import "../css/style.css"

const pageLayout =({ page }) => Page => {
    return () => (
    <div className="sudo-body">
        <div className="page-container">
            <header className="headster">
                <h1 className="headster__text-box">{page}</h1>
            </header>
        
            <div className="content">
                <Page />
            </div>
        </div>

    </div>
    )
}

export default pageLayout