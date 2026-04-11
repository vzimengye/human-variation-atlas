import NavBar from './NavBar';

function Layout({ children }) {
  return (
    <div className="site-shell">
      <NavBar />
      <main className="page-shell app-frame">{children}</main>
    </div>
  );
}

export default Layout;
