# Vercel Django Build Setup

pip install -r requirements.dev.txt
#python manage.py collectstatic --noinput
# python manage.py makemigrations
# python manage.py migrate
# python manage.py createsuperuser --noinput
# python manage.py create_superuser_fixtures --noinput


if [ "$run_fixtures" = "true" ];
then
  cat << EOF
  |-------------------------------------|
  |      Running Django Fixtures....    |
  |-------------------------------------|
EOF
  python manage.py loaddata core
  python manage.py loaddata social_account
  python manage.py loaddata userprofile
else
  cat << EOF
  |-------------------------------------|
  |      Ignoring Django Fixtures...    |
  |-------------------------------------|
EOF
fi;
