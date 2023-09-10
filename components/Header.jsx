import React from 'react'
import headerLogo from "../static/images/header-logo.png"
import headerLogoText from "../static/images/header-logo-text.png"
import headerImg from "../static/images/header-image.png"

export default function Header() {
  return (
    <div className='head-container'>
      <nav>
        <div className="logo">
          <img src={headerLogo} alt="header-logo" />
          <img src={headerLogoText} className="header-logo-text" />
        </div>
        <div className="header-items">
          <p>Услуги</p>
          <p>Как мы работаем</p>
          <p>Результат</p>
          <p>Заказать</p>
        </div>
      </nav>
      <div className="description">
        <div className="description-text">
          <h1>
            Разработка сайтов
            и мобильных приложений
          </h1>
          <p>
            Помогаем бизнесу увеличить прибыль <br />
            с помощью digital-инструментов
          </p>
          <button>Обсудить проект</button>
        </div>
        <img src={headerImg} alt="phone-image" />
      </div>
    </div>
  )
}
