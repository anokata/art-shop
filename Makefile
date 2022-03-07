reload:
	cd E:/dev/nginx-1.21.1; nginx -s reload

backend-dev-run:
	cd back; symfony server:start --port=3000

db-config:
	cd back; php bin/console doctrine:database:create