import NavBar from './NavBar';

function Layout({ children }) {
  return (
    <div className="site-shell">
      <main className="page-shell">
        <section className="screen-frame">
          <NavBar />
          <div className="screen-content">{children}</div>
        </section>
      </main>
    </div>
  );
}

export default Layout;
