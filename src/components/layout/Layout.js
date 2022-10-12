function Layout() {
  return (
    <>
      <div
        className='container-fluid p-0 d-grid fs-1'
        style={{
          gridTemplateColumns: '7em auto',
        }}
      >
        <aside
          className='bg-secondary'
          style={{ height: '100vh', position: 'sticky', top: '0' }}
        >
          <nav
            className='d-flex flex-column text-white '
            style={{ height: '100vh' }}
          >
            <div className='bg-primary text-white fw-bold text-center'>
              <a className='navbar-brand' href='/'>
                e-Warehouse
              </a>
            </div>

            <ul
              className='nav nav-pills flex-column flex-nowrap fs-5 text-white flex-grow-1 mt-3'
              style={{ overflowY: "auto" }}
            >
              <li className='nav-item border-bottom border-white border-opacity-50 '>
                <a className='nav-link bg-gradient rounded-0 active' href='/'>
                  Dashboard
                </a>
              </li>
              <li
                className='nav-item border-bottom border-white border-opacity-50'
                data-bs-toggle='collapse'
                data-bs-target='#menu1'
              >
                <a className='nav-link text-white bg-e-green' href='/'>
                  Orders
                </a>
                <ul className='collapse list-unstyled' id='menu1'>
                  <li className='bg-dark'>
                    <a className='nav-link ps-5 text-white' href='/'>
                      To Check
                    </a>
                  </li>
                  <li className='bg-dark'>
                    <a className='nav-link ps-5 text-white' href='/'>
                      To Pack
                    </a>
                  </li>
                  <li className='bg-dark'>
                    <a className='nav-link ps-5 text-white' href='/'>
                      To Ship
                    </a>
                  </li>
                  <li className='bg-dark'>
                    <a className='nav-link ps-5 text-white' href='/'>
                      Return
                    </a>
                  </li>
                  <li className='bg-dark'>
                    <a className='nav-link ps-5 text-white' href='/'>
                      All Orders
                    </a>
                  </li>
                </ul>
              </li>
              <li
                className='nav-item border-bottom border-white border-opacity-50'
                data-bs-toggle='collapse'
                data-bs-target='#menu2'
              >
                <a className='nav-link text-white' href='/'>
                  Inventory
                </a>
                <ul className='collapse list-unstyled' id='menu2'>
                  <li className='bg-dark'>
                    <a className='nav-link ps-5 text-white' href='/'>
                      List of Items
                    </a>
                  </li>
                  <li className='bg-dark'>
                    <a className='nav-link ps-5 text-white' href='/'>
                      Item Families
                    </a>
                  </li>
                  <li className='bg-dark'>
                    <a className='nav-link ps-5 text-white' href='/'>
                      Item Groups
                    </a>
                  </li>
                  <li className='bg-dark'>
                    <a className='nav-link ps-5 text-white' href='/'>
                      Inbound
                    </a>
                  </li>
                </ul>
              </li>
              <li className='nav-item border-bottom border-white border-opacity-50'>
                <a className='nav-link text-white' href='/'>
                  Customers
                </a>
              </li>
              <li className='nav-item border-bottom border-white border-opacity-50'>
                <a className='nav-link text-white' href='/'>
                  Shops
                </a>
              </li>
            </ul>

            <div className='dropup fs-5 text-white ps-5 p-2'>
              <a
                className='nav-link dropdown-toggle'
                href='/'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                UserName
              </a>
              <ul
                className='dropdown-menu dropdown-menu-end'
                style={{ minWidth: '8rem' }}
              >
                <li>
                  <a className='dropdown-item' href='/'>
                    My Account
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='/'>
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </aside>
        <main className='bg-e-light-gray fs-4 text-primary' style={{ height: '200vh' }}>
          <p>loremfwvwpfmewfml;ewf</p>
        </main>
      </div>
    </>
  );
}

export default Layout;
