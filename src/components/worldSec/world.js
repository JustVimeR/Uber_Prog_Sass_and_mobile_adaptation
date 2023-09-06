import './world.sass';
import appstore from '../../img/appstore.png';

const World = () => {
    return (
        <>
            <section className="world">
                <div className="container">
                    <div className="label label_white label_min">МІСТА</div>
                    <h2 className="title title_white">ПО ВСЬОМУ СВІТУ</h2>
                    <div className="subtitle subtitle_white">Ми у вашому місті та по всьому світу</div>
                    <a href="#" className="world_link">переглянути всі міста</a>
                </div>
            </section>

            <footer>
                <div className="footer_divider"></div>
                <div className="footer_wrapper">
                    <div>
                        <div className="footer_social">
                            <a href="#" className="footer_social_item">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="footer_social_item">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="footer_social_item">
                                <i className="fab fa-linkedin"></i>
                            </a>
                            <a href="#" className="footer_social_item">
                                <i className="fab fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="footer_links">
                            <div className="footer_links_main">
                                <a href="#">на головну</a>
                                <a href="#">міста</a>
                                <a href="#">для водіїв</a>
                            </div>
                            <div className="footer_links_sub">
                                <a href="#">центр підтримки</a>
                                <a href="#">вакансії</a>
                                <a href="#">розробники</a>
                                <a href="#">блог</a>
                                <a href="#">про нас</a>
                            </div>
                            <a href="#" className="footer_links_lang">Український</a>
                        </div>
                    </div>
                    <div>
                        <div className="footer_mobile">
                            <a href="#">
                                <img src={appstore} alt="App Store" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default World;