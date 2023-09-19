import NavigationBar from '~/components/Layouts/components/NavigationBar';

function DefaultLayout({ children }) {
    return (
        <div>
            <header className="headers-container">
                <NavigationBar />
            </header>
            <div className="container">{children}</div>
        </div>
    );
}

export default DefaultLayout;
