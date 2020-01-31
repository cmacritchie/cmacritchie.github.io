const pageLayout =({ page }) => Page => {
  return () => (
  <>
      <div>
          <header className="page-container">
              <h1 className="headster__text-box">{page}</h1>
          </header>
      
          <div className="content">
              <Page />
          </div>
      </div>

  </>
  )
}

export default pageLayout