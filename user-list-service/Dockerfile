FROM php:7.3.0-cli

RUN apt-get update -y

RUN apt-get -y install make libzip-dev

RUN apt-get install -y --no-install-recommends git curl unzip

RUN docker-php-ext-install mysqli pdo pdo_mysql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN git clone https://github.com/vishnubob/wait-for-it.git /var/www/user-list-service/wait-for-it.git

COPY composer.* /var/www/user-list-service/

COPY symfony.lock /var/www/user-list-service/

WORKDIR /var/www/user-list-service

RUN composer install

COPY . /var/www/user-list-service/

RUN composer run test

CMD ["composer","run","start","--timeout=0"]

EXPOSE 8000
