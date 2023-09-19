import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { userRoutes, publicRoutes } from '~/routes'; // adminRoutes,
import { DefaultLayout } from '~/components/Layouts';
import { AuthProvider } from './components/AuthContext/AuthContext';
import RequireAuth from '~/components/RequireAuth/RequireAuth';

function App() {
    return (
        <Router>
            <AuthProvider>
                <div className="App">
                    <Routes>
                        {publicRoutes.map((route, index) => {
                            let Layout = DefaultLayout;
                            if (route.layout) {
                                Layout = route.layout;
                            } else if (route.layout === null) {
                                Layout = Fragment;
                            }

                            const Page = route.component;
                            return (
                                <Route
                                    key={index}
                                    path={route.path}
                                    element={
                                        <Layout>
                                            <Page />
                                        </Layout>
                                    }
                                />
                            );
                        })}

                        {/* <Route
                            path="/admin/*"
                            element={
                                <RequireAuth requiredRole="admin">
                                    <Routes>
                                        {adminRoutes.map((route, index) => {
                                            let Layout = AdminDefaultLayout;
                                            if (route.layout) {
                                                Layout = route.layout;
                                            } else if (route.layout === null) {
                                                Layout = Fragment;
                                            }

                                            const Page = route.component;
                                            return (
                                                <Route
                                                    key={index}
                                                    path={route.path}
                                                    element={
                                                        <Layout>
                                                            <Page />
                                                        </Layout>
                                                    }
                                                />
                                            );
                                        })}
                                    </Routes>
                                </RequireAuth>
                            }
                        /> */}

                        <Route
                            path="/user/*"
                            element={
                                <RequireAuth requiredRole="user">
                                    <Routes>
                                        {userRoutes.map((route, index) => {
                                            let Layout = DefaultLayout;
                                            if (route.layout) {
                                                Layout = route.layout;
                                            } else if (route.layout === null) {
                                                Layout = Fragment;
                                            }

                                            const Page = route.component;
                                            return (
                                                <Route
                                                    key={index}
                                                    path={route.path}
                                                    element={
                                                        <Layout>
                                                            <Page />
                                                        </Layout>
                                                    }
                                                />
                                            );
                                        })}
                                    </Routes>
                                </RequireAuth>
                            }
                        />
                    </Routes>
                </div>
            </AuthProvider>
        </Router>
    );
}

export default App;
