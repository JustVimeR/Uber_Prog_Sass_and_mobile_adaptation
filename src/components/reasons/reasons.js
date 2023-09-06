import './reasons.sass';
import rectangle8 from '../../img/rectangleImg/Rectangle.png';
import rectangle1 from '../../img/rectangleImg/Rectangle-1.png';
import rectangle2 from '../../img/rectangleImg/Rectangle-2.png';
import rectangle3 from '../../img/rectangleImg/Rectangle-3.png';
import rectangle4 from '../../img/rectangleImg/Rectangle-4.png';
import rectangle5 from '../../img/rectangleImg/Rectangle-5.png';
import rectangle6 from '../../img/rectangleImg/Rectangle-6.png';
import rectangle7 from '../../img/rectangleImg/Rectangle-7.png';

const Reasons = () => {
    return (
        <>
            <section className='reasons'>
                <div className="container">
                    <div className="label">переваги</div>
                    <h2 className="title">8 причин почати працювати з нами</h2>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="reasons_block">
                                <div className="reasons_round"><img src={rectangle8} alt="reason" /></div>
                                <div className="reasons_descr">
                                    <div className="reasons_subtitle">
                                        Жодної готівки, оплата відбувається автоматично
                                    </div>
                                    <div className="reasons_text">
                                        Ціна поїздки оплачується пасажиром з прив'язаної банківської картки, тобто. немає жодних ризиків, пов'язаних з перевезенням готівки як для пасажира, так і для водія, Вам не потрібно шукати дрібні гроші для обміну.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="reasons_block">
                                <div className="reasons_round"><img src={rectangle1} alt="reason" /></div>
                                <div className="reasons_descr">
                                    <div className="reasons_subtitle">
                                        Комісія 8% + БОНУСИ
                                    </div>
                                    <div className="reasons_text">
                                        У нас є мінімальна комісія і ми виплачуємо бонуси за кожну поїздку, деякі наші конкуренти залишають бонуси собі. Ми працюємо чесно та з нами водії заробляють більше!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="reasons_block">
                                <div className="reasons_round"><img src={rectangle2} alt="reason" /></div>
                                <div className="reasons_descr">
                                    <div className="reasons_subtitle">
                                        Високий дохід із гарантованими виплатами
                                    </div>
                                    <div className="reasons_text">
                                        Ми виплачуємо заробітну плату на особисту банківську картку водія! Вам не потрібно оформлювати ТОВ, ІП, сплачувати податки, подавати декларацію, сплачувати бухгалтерські послуги та ведення банківського рахунку.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="reasons_block">
                                <div className="reasons_round"><img src={rectangle3} alt="reason" /></div>
                                <div className="reasons_descr">
                                    <div className="reasons_subtitle">
                                        Робота в зручний час, жодних графіків
                                    </div>
                                    <div className="reasons_text">
                                        Ви просто натискаєте кнопку вийти на лінію для початку роботи, коли вирішите закінчити натискаєте вийти з лінії. Ви можете підробляти лише вранці, увечері, у вихідні чи святкові дні!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="reasons_block">
                                <div className="reasons_round"><img src={rectangle4} alt="reason" /></div>
                                <div className="reasons_descr">
                                    <div className="reasons_subtitle">
                                        Комфортне, прозоре та просте підключення
                                    </div>
                                    <div className="reasons_text">
                                        Ми підключаємо дистанційно та безкоштовно, Вам не потрібно приїжджати до нас! Ви надсилаєте нам копії документів, ми реєструємо Вас та надсилаємо дані для підключення, через 1-2 дні Ви можете починати працювати!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="reasons_block">
                                <div className="reasons_round"><img src={rectangle5} alt="reason" /></div>
                                <div className="reasons_descr">
                                    <div className="reasons_subtitle">
                                        Завжди велика кількість замовлень
                                    </div>
                                    <div className="reasons_text">
                                        Додаток показує, де зараз найбільше замовлень і де діють підвищені тарифи. У Вас не буде простою та неодружених пробігів. Наші пасажири завжди приємні та абсолютно неконфліктні люди, яких приємно возити
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="reasons_block">
                                <div className="reasons_round"><img src={rectangle6} alt="reason" /></div>
                                <div className="reasons_descr">
                                    <div className="reasons_subtitle">
                                        Цілодобова підтримка
                                    </div>
                                    <div className="reasons_text">
                                        У Uber діє цілодобова підтримка водіїв електронною поштою. Якщо щось незрозуміло, Ви завжди можете поставити запитання через On-line консультацію.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="reasons_block">
                                <div className="reasons_round"><img src={rectangle7} alt="reason" /></div>
                                <div className="reasons_descr">
                                    <div className="reasons_subtitle">
                                        Без шашечок та наклейок
                                    </div>
                                    <div className="reasons_text">
                                        Вам не потрібно змінювати колір, встановлювати «шашки» на автомобіль та обклеювати його наклейками.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Reasons;