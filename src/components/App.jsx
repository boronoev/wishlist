import { Link, Route, Routes } from 'react-router-dom'
import './app.css'
import Bars from './Bars/Bars'
import LogIn from './pages/LogInPage'
import Mainpage from './pages/MainPage'
import Menu from './Menu/Menu'
import Signup from './pages/SignUpPage'
import NotFoundPage from './pages/NotFoundPage'
import CreateGiftRegistry from './pages/CreateGiftRegistryPage'
import CreateWishlist from './pages/CreateWishListPage'
import Wishlist from './pages/Wishlist'


export default function WishlistApp() {


  return (
    <div className='app__body'>
      <header className="header" >
        <div className="header__wrapper center-wrapper">
          <div className='header__info' >
            <Bars />
          </div>
          <div><Link className='header__logo' to='/'>YouMe&Wish</Link></div>
          <div className='header__actions header-actions'>
            <div><Link className='header-actions__item' to='/sign'>Войти</Link></div>
            <div><Link className='header-actions__item' to='/signup'>Зарегистрироваться</Link></div>
          </div>
        </div>
      </header>
      <Menu />
      <div className='header__empty'></div>
      <Routes>
        <Route path="/">
          <Route index element={<Mainpage />}></Route>
          <Route path="sign" element={<LogIn />} />
          <Route path="signup" element={<Signup />} />
          <Route path="giftregistry" element={<CreateGiftRegistry />} />
          <Route path="wishlist" element={<CreateWishlist />} />

          <Route path=":id" element={<Wishlist />}></Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}
