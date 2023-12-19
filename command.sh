# backend project creation
django-admin startproject backend

# frontend project creation
npx create-react-app frontend

# mysql client install
pip install mysqlclient

# django project run
python manage.py runserver

# database migration
python manage.py makemigrations
python manage.py migrate

# stripe install
pip install --upgrade stripe

# create new app in django
python manage.py startapp payments

# rest framework install
pip install djangorestframework

# vitual enviromen start
pip install virtualenv
python -m venv venv
venv\Scripts\activate 

# reauiremnts txt make
pip freeze > requirements.txt
pip install -r requirements.txt

# Generate the initial migration for your model
python manage.py makemigrations

# Apply the migrations to create the database table
python manage.py migrate

# creates the database tables for all apps in INSTALLED_APPS whose tables have not already been created
python manage.py syncdb

npm install --save react-router-dom

## admin user create
python manage.py createsuperuser

pip install djangorestframework django-cors-headers

npm install bootstrap@4.6.0 reactstrap@8.9.0 --legacy-peer-deps

index.js -> import 'bootstrap/dist/css/bootstrap.css';

npm install axios
npm install semantic-ui-react semantic-ui-css

http://localhost:8000/api/bookings
http://localhost:8000/api/ratings/
http://localhost:8000/api/customers/

http://localhost:8000/payments/test-payment/

pip install python-decouple