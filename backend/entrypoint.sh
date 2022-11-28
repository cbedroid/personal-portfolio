#!/bin/sh

# Local Development Environment

if [ "$DATABASE" = "postgres" ]
then
    echo "Waiting for postgres..."

    while ! nc -z $SQL_HOST $SQL_PORT; do
      sleep 0.1
    done

    echo "PostgreSQL started"
fi

if [ -d "venv" ]; then
  source venv/bin/activate
fi;

python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser --noinput
python manage.py create_token_user
python manage.py collectstatic --noinput

if [ "$run_fixtures" = "true" ];
then
  cat << EOF
  |-------------------------------------|
  |      Running Django Fixtures....    |
  |-------------------------------------|
EOF
  python manage.py loaddata core_dev
else
  cat << EOF
  |-------------------------------------|
  |      Ignoring Django Fixtures...    |
  |-------------------------------------|
EOF
fi;

exec "$@"
