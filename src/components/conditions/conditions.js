import './conditions.sass';

const Conditions = () => {
    return (
        <>
            <section className="require" id="require">
                <div className="container">
                    <div className="label">Можливості</div>
                    <div className="title">умови та вимоги</div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="require_block">
                                <div className="require_title">
                                    УМОВИ: зі своїм авто:
                                </div>
                                <ul className="require_list">
                                    <li>Підключаємо до системи UBER під 10%.</li>
                                    <li>Жодних внесків 0%!</li>
                                    <li>Можемо підключати віддалено без приїзду в офіс</li>
                                    <li>ІП не потрібно</li>
                                    <li>Замовлення розподіляються без урахування рейтингу найближчим водіям</li>
                                    <li>Робота тільки за безготівковим розрахунком</li>
                                    <li>Гроші перераховуємо на карту водію або готівкою в офісі</li>
                                </ul>
                                <div className="require_descr">В день заробіток складає 7000-12000грн + бонус 3000 гривень</div>
                            </div>
                        </div>
                        <div className="col-md-6"><div className="require_block">
                            <div className="require_title">
                                УМОВИ: на авто компанії:
                            </div>
                            <ul className="require_list">
                                <li>Надаємо авто без застави</li>
                                <li>Без щоденних виплат по оренді</li>
                                <li>Середа п'ятниця та субота робота на компанію решта днів ви працюєте на себе</li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-md-6"><div className="require_block require_block_nbm warning">
                            <div className="require_title">
                                ВИМОГИ:
                            </div>
                            <ul className="require_list">
                                <li>Наявність автомобіля без реклами</li>
                                <li>Автомобіль не повинен бути жовтим і не з жовтими номерами</li>
                                <li>Машина не старше 3 років</li>
                                <li>Стаж водіння не менше 3 років</li>
                                <li>Девайс на системі андроїд 9.0 і вище(самсунг)</li>
                            </ul>
                        </div>
                        </div>
                        <div className="col-md-6"><div className="require_block require_block_nbm warning">
                            <div className="require_title">
                                ДОКУМЕНТИ:
                            </div>
                            <ul className="require_list">
                                <li>Права 2 сторони</li>
                                <li>Паспорт лицьова сторона</li>
                                <li>СтС</li>
                                <li>Ліцензія (якщо є)</li>
                                <li>Номер телефону</li>
                                <li>Номер картки для перерахування грошей (вказати в листі)!</li>
                            </ul>
                        </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    );
}

export default Conditions;