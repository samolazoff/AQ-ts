import './FormContacts.sass';

const FormContacts = () => {
    return (
        <form className="app-contacts-form-feedback" method="post">
            <h3 className="app-contacts-form-feedback__title">Мы на связи</h3>
            <h4 className="app-contacts-form-feedback__subtitle">Оставте заявку, и мы свяжемся с вами</h4>
            <div className="app-contacts-form-feedback-wrap">
                <div className="app-contacts-form-feedback-content">
                    <div className="app-contacts-form-feedback-wrap-input">
                        <label className='app-contacts-form-feedback-input'>
                            Ваше имя:
                            <input id="formFeedbackName" type="text" name="formFeedbackName"/>
                        </label >
                        <label className='app-contacts-form-feedback-input'>
                            Название компании:
                            <input id="formFeedbackCompany" type="text" name="formFeedbackCompany"/>
                        </label>
                        <label className='app-contacts-form-feedback-input'>
                            Номер телефона:
                            <input id="formFeedbackPhone" type="tel" name="formFeedbackPhone"/>
                        </label>
                    </div>
                    <textarea id="formFeedbackPost" name="formFeedbackPost"> </textarea>
                </div>
                <span className="text-confid">Нажимая кнопку "Отправить", вы соглашаетесь на обработку персональных данных в соответствие с Политикой конфидициальности.</span>
                <button className="btn" type="submit">Отправить</button>
            </div>
        </form>
    );
};

export default FormContacts;