function Navigation({navigationItems}: {
  navigationItems: NavigationItem[]
}) {
  return (
    <nav>
      {navigationItems.map(item => 
        <a className="App-nav-item" key={item.id} href={item.url}>{item.title}</a>
      )}
    </nav>
  );
}

export default Navigation;

