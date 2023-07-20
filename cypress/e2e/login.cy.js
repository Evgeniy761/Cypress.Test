describe('Авторизация (позитивный)', function () {                                   // Что проверяем
   it('Ввожу верный логин и пароль', function () {                                   // Какие действия   
        cy.visit('https://login.qa.studio/');                                        // Сайт проверки
        cy.get('#mail').type('german@dolnikov.ru');                                  // Нашли нужное поле и прописали его значение
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();                                              // Нажимаем кнопку Войти
        cy.contains('Авторизация прошла успешно').should('be.visible');              // Окно успешной авторизации
        cy.get('#exitMessageButton > .exitIcon').click();                            // Нажатие на Х
   })   
})


describe('Восстановление пароля', function () {                                      // Что проверяем
   it('Нажать Забыли пароль', function () {                                          // Какие действия   
        cy.visit('https://login.qa.studio/');                                        // Сайт проверки
        cy.get('#forgotEmailButton').click();                                        //Нажимаем на Забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru');                            // Вводим почту для восстановления
        cy.get('#restoreEmailButton').click();                                       // Нажимаем Отправить код
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible');      // Окно успешной отправки кода восстановления
        cy.get('#exitMessageButton > .exitIcon').click();                            // Нажатие на Х
  })   
})


describe('Авторизация (негативный)', function () {                                   // Что проверяем
   it('Ввожу верный логин и не верный пароль', function () {                         // Какие действия   
        cy.visit('https://login.qa.studio/');                                        // Сайт проверки
        cy.get('#mail').type('german@dolnikov.ru');                                  // Нашли нужное поле и прописали его значение
        cy.get('#pass').type('iLoveqastudio12');
        cy.get('#loginButton').click();                                              // Нажимаем кнопку Войти
        cy.contains('Такого логина или пароля нет').should('be.visible');            // Окно не успешной авторизации
        cy.get('#exitMessageButton > .exitIcon').click();                            // Нажатие на Х
   })   
})


describe('Авторизация (негативный)', function () {                                   // Что проверяем
   it('Ввожу не верный логин и верный пароль', function () {                         // Какие действия   
        cy.visit('https://login.qa.studio/');                                        // Сайт проверки
        cy.get('#mail').type('german@dolnikov.');                                    // Нашли нужное поле и прописали его значение
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();                                              // Нажимаем кнопку Войти
        cy.contains('Нужно исправить проблему валидации').should('be.visible');      // Окно не успешной авторизации
        cy.get('#exitMessageButton > .exitIcon').click();                            // Нажатие на Х
   })   
})


describe('Авторизация (негативный)', function () {                                   // Что проверяем
   it('Ввожу логин без @ и верный пароль', function () {                             // Какие действия   
        cy.visit('https://login.qa.studio/');                                        // Сайт проверки
        cy.get('#mail').type('germandolnikov.');                                     // Нашли нужное поле и прописали его значение
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();                                              // Нажимаем кнопку Войти
        cy.contains('Нужно исправить проблему валидации').should('be.visible');      // Окно не успешной авторизации
        cy.get('#exitMessageButton > .exitIcon').click();                            // Нажатие на Х
   })   
})


describe('Проверкa на приведение к строчным буквам в логине ', function () {         // Что проверяем
   it('Ввожу верный логин и пароль', function () {                                   // Какие действия   
        cy.visit('https://login.qa.studio/');                                        // Сайт проверки
        cy.get('#mail').type(' GerMan@Dolnikov.ru');                                 // Нашли нужное поле и прописали его значение
        cy.get('#pass').type('iLoveqastudio1');
        cy.get('#loginButton').click();                                              // Нажимаем кнопку Войти
        cy.contains('Авторизация прошла успешно').should('be.visible');              // Окно успешной авторизации
        cy.get('#exitMessageButton > .exitIcon').click();                            // Нажатие на Х
   })   
})




describe('Оформление заказа на HuntingPony', function () {                                                      // Что проверяем
   it('Кладем 2 товара в корзину и оформляем', function () {                                                    // Какие действия   
        cy.visit('https://huntingpony.com/');                                                                   // Сайт проверки
        cy.get('[data-index="1"] > .header__collections-controls > .header__collections-link').click();         // Выбираем раздел -лежанки
        cy.wait(2000);                                   
        cy.get('[data-product-id="338934699"] > .product-preview__content > .product-preview__area-photo > .product-preview__photo > .img-ratio > .img-ratio__inner > a > :nth-child(1) > .product-preview__img-1').click(); 
        cy.get('.add-cart-counter__btn').click();                                                               // Кладем в корзину
        cy.wait(2000);
        cy.get('[data-add-cart-counter-plus=""]').click();                                                      //Выбираем количество
        cy.wait(2000);
        cy.get('.header__cart').click();                                                                        // Переходим в корзину
        cy.wait(2000);
        cy.get('.cart-controls > .button').click();                                                             // Жмем Оформить заказ
        cy.get('#client_surname').type('Антонов');                                                              // Вводим фамилию
        cy.get('#client_contact_name').type('Антон');                                                           // Вводим имя
        cy.get('#client_phone').type('88002000600');                                                            // Номер телефона
        cy.get('#client_email').type('german@dolnikov.ru');                                                     // E-mail
        cy.get('#shipping_address_country').type('Россия');                                                     // Адрес доставки
        cy.get('#shipping_address_full_locality_name').type('Ростов-на-Дону, Ростовская область');
        cy.get('#shipping_address_street').type('Московская');
        cy.get('#shipping_address_house').type('77');
        cy.get('#shipping_address_flat').type('7');
        cy.get('#order_comment').type('Довезите пожалуйста живым')                                               // Комментарий к заказу
        cy.get('[for="order_payment_gateway_id_2976642"] > .co-payment_method-input > span').click();            // Способ оплаты                                                                                                           
     })  


})


// P.S.
// Дальше не смог разобраться, как из всплывающего списка выбрать пол зверя и не понял, как пройти тест, что я не бот, с рандомными картинками.
// Бывает, что с первого раза выдает ошибку по тесту с собаками. Второй прогон проходит успешно. Причина не ясна...
