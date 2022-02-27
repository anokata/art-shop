reload:
	cd E:/dev/nginx-1.21.1; nginx -s reload

backend-dev-run:
	cd back; symfony server:start

db-config:
	php bin/console doctrine:database:create