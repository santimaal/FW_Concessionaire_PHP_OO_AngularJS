FROM php:7.4-apache
RUN docker-php-ext-install mysqli && a2enmod rewrite
COPY . /xampp/htdocs/angular_js
EXPOSE 80