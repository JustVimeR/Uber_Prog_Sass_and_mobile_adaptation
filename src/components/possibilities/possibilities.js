import './possibilities.sass';
import auto from '../../img/auto.png';

const Possibilities = () => {
    return (
        <>
            <section className='mobile'>
                <div className="container">
                    <div className="label">Можливості</div>
                    <div className="title">мобільний додаток убер</div>
                    <div className="subtitle">Зробіть замовлення, здійсніть поїздку та сплатіть її вартість, використовуючи свій мобільний телефон</div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="mobile_item mobile_item_1">
                                <div className="mobile_item_subtitle">оформлення замовлення одним дотиком</div>
                                <div className="mobile_item_plus"></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mobile_item mobile_item_2">
                                <div className="mobile_item_subtitle">надійна подача</div>
                                <div className="mobile_item_plus"></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mobile_item mobile_item_3">
                                <div className="mobile_item_subtitle">прозорі ціни</div>
                                <div className="mobile_item_plus"></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mobile_item mobile_item_4">
                                <div className="mobile_item_subtitle">безготівкова оплата</div>
                                <div className="mobile_item_plus"></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mobile_item mobile_item_5">
                                <div className="mobile_item_subtitle">Зворотній зв'язок</div>
                                <div className="mobile_item_plus"></div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="mobile_item mobile_item_6">
                                <div className="mobile_item_subtitle">розділити вартість поїздки</div>
                                <div className="mobile_item_plus"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="choice">
                <div className="container">
                    <div class="black"></div>
                    <div className="label label_white">Можливості</div>
                    <h2 className="title title_white">Вибір - чудова штука!</h2>
                    <div className="subtitle subtitle_white">Замовте автомобіль, який підходить вам за стилем та бюджетом</div>
                    <img src={auto} alt="car" className="choice_img" />
                    <div className="choice_descr">
                        Машини щодня.
                        <br />
                        Краще, швидше та дешевше, ніж таксі</div>
                </div>
            </section>
        </>
    );
}

export default Possibilities;