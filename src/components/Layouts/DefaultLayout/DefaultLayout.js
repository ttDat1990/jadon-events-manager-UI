import NavigationBar from '~/components/Layouts/components/NavigationBar';
import Footer from '~/components/Layouts/components/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <header className="headers-container">
                <NavigationBar />
            </header>
            <div className="container">{children}</div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default DefaultLayout;
