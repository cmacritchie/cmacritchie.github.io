import Header from '../components/Header'

const withLayout = Page => {
    return () => (
        <div>
            <Header />
            <Page />
        </div>
    )
}

export default withLayout