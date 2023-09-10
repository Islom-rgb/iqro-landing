import React, { useState } from 'react'
import searchIcon from "../static/images/search-icon.png"
import analys from "../static/images/analys.png"
import structure from "../static/images/structure.png"
import UIIcon from "../static/images/UI-icon.png"
import scaner from "../static/images/scaner.png"
import rocket from "../static/images/rocket.png"
import checkmark from "../static/images/checkmark.png"
import success from "../static/images/Outline Success.png"

export default function MainComponent() {
    let services = ['Komilov Jahongir', 'Mобильные приложения', 'Маркетинг продвижение',
        'Cмм продвижение', 'CEO - оптимизация', 'брендинг и айдентика',
    ]
    let checkmarks = ['Автоматизация бизнес-процессов', 'Привлечение новых клиентов', 'Увеличение прибыли',
        'Ускорение принятия решений', 'эффективности', 'Повышение лояльности',
    ]

    let howWeWork = [
        { text: 'Исследование ниши и стратегия развития', image: searchIcon },
        { text: 'Анализ конкурентов и юзабилити тесты', image: analys },
        { text: 'Семантическая структура и оптимизация', image: structure },
        { text: 'Прототипирование UI | UX дизайна для продукта', image: UIIcon },
        { text: 'Разработка и верстка', image: scaner },
        { text: 'Финальное тестирование и запуск продукта', image: rocket }
    ]

    const [count, setCount] = useState(0);
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');

    const handleNum = event => {
        setNumber(event.target.value);
    };
    const handleName = event => {
        setName(event.target.value);
    };
    function handleData() {
        name && number ? setCount(3) : alert('please fill')
    }

    return (
        <div className='container'>
            <p className='service-title'>услуги </p>
            <div className='services_container'>
                {
                    services.map(product => {
                        return (
                            <div key={product} className='service-card'>
                                <h1>{product}</h1>
                                <button>
                                    Подробнее
                                </button>
                            </div>
                        )
                    })
                }
            </div>
            <div className="job-description">
                <h1>Как мы работаем </h1>
                <div className="job-description-box">
                    {
                        howWeWork.map(product => {
                            return (
                                <div key={product.text} className='job-description-box-item'>
                                    <img src={product.image} alt="" />
                                    <p>{product.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="checkmarks">
                <div className="checkmarks-title">
                    <div>Что даст вашему бизнесу</div>
                    внедрение Digital-инструментов
                </div>
                <div className="checkmark-boxes">
                    {
                        checkmarks.map(product => {
                            return (
                                <div key={product} className='checkmark-box'>
                                    <img src={checkmark} alt="checkmark" />
                                    <p>{product}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <div className="pricing">
                    <div className="price-box">
                        <div className="price-box-text">
                            <h1>Сколько стоят услуги</h1>
                            <p>Цена рассчитывается индивидуально
                                в зависимости отсложности, объема
                                и сроков работы.
                            </p>
                            <p>Разработчик оценивает временные затраты
                                по проекту, а аналитики устанавливают
                                стоимость продукта.</p>
                        </div>
                        {count === 0 ? <div className="price-box-card">
                            <h1>
                                Получить
                                бесплатную
                                консультацию
                            </h1>
                            <p>
                                В рамках консультации уточним  необходимую информацию
                                для анализа вашего проекта
                            </p>
                            <button onClick={() => setCount(1)}>
                                Получить
                            </button>
                        </div> :
                            count === 1 ? <div className="price-box-card">
                                <div>
                                    <input
                                        placeholder='ваше имя'
                                        type="text"
                                        onChange={handleNum}
                                        value={number}
                                    />
                                    <input
                                        placeholder='номер телефона'
                                        type="number"
                                        onChange={handleName}
                                        value={name}
                                    />
                                </div>
                                <button onClick={handleData}>
                                    отправить
                                </button>
                            </div> :
                                <div className="price-box-card">
                                    <div>
                                        <h1>спасиба за вашу заяфку!</h1>
                                        <img src={success} alt="" />
                                        <p>наш менеджер скоро свяжется с вами</p>
                                    </div>
                                    <button onClick={() => {
                                        setCount(0);
                                        setName('');
                                        setNumber('')
                                    }}
                                        className='last_btn'>Отправлено</button>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </div >
    )
}
