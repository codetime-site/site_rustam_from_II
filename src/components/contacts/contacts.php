<section class="contacts section" id="contacts">
    <div class="container">
        <h2 class="section-title">Контакты</h2>
        
        <div class="contacts__content">
            <div class="contacts__info">
                <h3 class="contacts__subtitle">Свяжитесь с нами</h3>
                <p class="contacts__description">
                    Отправьте нам чертежи или техническое задание, и мы рассчитаем стоимость 
                    и сроки изготовления в течение 1 часа.
                </p>
                
                <div class="contacts__items">
                    <div class="contacts__item">
                        <div class="contacts__item-icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M8 12L16 18L24 12M6 10H26C27.1046 10 28 10.8954 28 12V22C28 23.1046 27.1046 24 26 24H6C4.89543 24 4 23.1046 4 22V12C4 10.8954 4.89543 10 6 10Z" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </div>
                        <div class="contacts__item-content">
                            <h4 class="contacts__item-title">Email</h4>
                            <a href="mailto:info@cnc-nsk.ru" class="contacts__item-link">info@cnc-nsk.ru</a>
                        </div>
                    </div>
                    
                    <div class="contacts__item">
                        <div class="contacts__item-icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M8 4H12L14 10L11 12C12.5 15 15 17.5 18 19L20 16L26 18V22C26 23.1046 25.1046 24 24 24C14.6112 24 7 16.3888 7 7C7 5.89543 7.89543 5 9 5H8Z" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </div>
                        <div class="contacts__item-content">
                            <h4 class="contacts__item-title">Телефон</h4>
                            <a href="tel:+73833334455" class="contacts__item-link">+7 (383) 333-44-55</a>
                        </div>
                    </div>
                    
                    <div class="contacts__item">
                        <div class="contacts__item-icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 28C22.6274 28 28 22.6274 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28Z" stroke="currentColor" stroke-width="2"/>
                                <path d="M16 8V16L20 20" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </div>
                        <div class="contacts__item-content">
                            <h4 class="contacts__item-title">Режим работы</h4>
                            <p class="contacts__item-text">Пн-Пт: 9:00 - 18:00<br>Сб-Вс: выходной</p>
                        </div>
                    </div>
                    
                    <div class="contacts__item">
                        <div class="contacts__item-icon">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16 28C16 28 26 20 26 12C26 6.47715 21.5228 2 16 2C10.4772 2 6 6.47715 6 12C6 20 16 28 16 28Z" stroke="currentColor" stroke-width="2"/>
                                <circle cx="16" cy="12" r="3" stroke="currentColor" stroke-width="2"/>
                            </svg>
                        </div>
                        <div class="contacts__item-content">
                            <h4 class="contacts__item-title">Адрес</h4>
                            <p class="contacts__item-text">г. Новосибирск,<br>ул. Промышленная, 15</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="contacts__form-wrapper">
                <form class="contacts__form" id="contactForm">
                    <h3 class="contacts__form-title">Получить расчет</h3>
                    
                    <div class="form-group">
                        <label for="name" class="form-label">Ваше имя *</label>
                        <input type="text" id="name" name="name" class="form-control" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="phone" class="form-label">Телефон *</label>
                        <input type="tel" id="phone" name="phone" class="form-control" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" id="email" name="email" class="form-control">
                    </div>
                    
                    <div class="form-group">
                        <label for="message" class="form-label">Описание задачи *</label>
                        <textarea id="message" name="message" class="form-control" rows="5" required></textarea>
                    </div>
                    
                    <div class="form-group">
                        <label for="file" class="form-label">Прикрепить чертежи</label>
                        <input type="file" id="file" name="file" class="form-control" multiple accept=".pdf,.dwg,.dxf,.jpg,.png">
                        <small class="form-text">Форматы: PDF, DWG, DXF, JPG, PNG</small>
                    </div>
                    
                    <div class="form-group">
                        <label class="form-checkbox">
                            <input type="checkbox" name="agree" required>
                            <span>Я согласен с <a href="#" target="_blank">политикой конфиденциальности</a></span>
                        </label>
                    </div>
                    
                    <button type="submit" class="btn btn-primary btn-lg">Отправить заявку</button>
                    
                    <div class="contacts__form-message" id="formMessage"></div>
                </form>
            </div>
        </div>
    </div>
</section>