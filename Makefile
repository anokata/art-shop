reload:
	cd D:/dev/nginx-1.21.1; ./nginx -s reload

backend-dev-run:
	cd back; symfony server:start