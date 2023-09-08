import './navPannel.sass';
import uber from '../../img/uber1.png';
import '../sass/_media.sass';

const navPannel = () => {

    window.addEventListener('DOMContentLoaded', () => {
        const menu = document.querySelector('.menu'),
            menuItem = document.querySelectorAll('.menu_item'),
            hamburger = document.querySelector('.hamburger');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger_active');
                menu.classList.toggle('menu_active');
            })
        })
    })

    return (
        <>
            <header>
                <nav>
                    <div className="container">
                        <ul className="menu">
                            <li className="menu_item"><a href="#" className="menu_link">Головна</a></li>
                            <li className="menu_item"><a href="#require" className="menu_link">Зі своїм авто</a></li>
                            <li className="menu_item"><a href="#require" className="menu_link">На авто компанії</a></li>
                            <li className="menu_item"><a href="#require" className="menu_link">Вимоги</a></li>
                            <li className="menu_item"><a href="#" className="menu_link">Контакти</a></li>
                            <li className="menu_item"><a href="#" className="menu_link">Залишити заявку</a></li>
                        </ul>
                    </div>
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </header>

            <div className="subheader">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 offset-md-1">
                            <a href="#" className="subheader_logo">
                                <img src={uber} alt="logo" className='subheader_img' /></a>
                            <div className="subheader_official">Офіційний партнер Uber у Києві</div>
                        </div>
                        <div className="xs-hidden col-6 col-md-3 offset-md-1 col-xl-2 offset-xl-2">
                            <div className="subheader_call">
                                Телефонуйте нам щодня
                            </div>
                            <a href="tel:380986667788" className="subheader_phone">380 98 666 77 88</a>
                        </div>

                        <div className="col-6 col-md-3">
                            <a href="tel:380986667788" className="xs-visible subheader_phone">380 98 666 77 88</a>
                            <button className='subheader_btn'>Замовити звінок</button>
                        </div>
                    </div>
                </div>

            </div>

            <section className='promo'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 offset-md-1 col-lg-10 offset-lg-1">
                            <h1 className="promo_header">
                                КОМПАНІЯ UBER PARTNERS!
                            </h1>
                            <h2 className="promo_subheader">
                                Запрошуємо водіїв! НА СВОЄМУ АВТО!
                            </h2>
                            <div className="promo_descr">Компанія UBER динамічно розвивається. Компанія на ринку займає лідируюче місце серед таксомоторних компаній, Компанія абсолютно прозора, ви можете контролювати всі процеси у себе в особистому кабінеті. Бонусна система. Крім виконаної роботи на замовлення, компанія нараховує бонуси запічний час.
                                <br /> <br />
                                Ми одні з партнерів і зарекомендували себе як одна із найкращих команд у місті Києві. Водії у нас заробляють від 80000-120000 на місяць.
                            </div>
                            <button className='promo_btn'>ВІДПРАВИТИ ЗАПИТ!</button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default navPannel;