IMAGE_NAME=cartsaz
DOCKERFILE=Dockerfile
DOCKER_COMPOSE_FILE=docker-compose.yml

build:
	@echo "Building React app locally..."
	npm install
	npm run build
	@echo "Build completed locally."

docker-build:
	@echo "Building Docker image..."
	docker build -t $(IMAGE_NAME) -f $(DOCKERFILE) .
	@echo "Docker image built successfully."

docker-run:
	@echo "Running Docker container..."
	docker run -p 80:80 $(IMAGE_NAME)
	@echo "Docker container is running."

docker-compose-up:
	@echo "Building and starting services with Docker Compose..."
	docker-compose -f $(DOCKER_COMPOSE_FILE) up --build
	@echo "Docker Compose services are up."

docker-compose-down:
	@echo "Stopping and removing Docker Compose services..."
	docker-compose -f $(DOCKER_COMPOSE_FILE) down
	@echo "Docker Compose services stopped and removed."

docker-clean:
	@echo "Cleaning up Docker images..."
	docker rmi $(IMAGE_NAME)
	@echo "Docker image cleaned up."

all: build docker-build docker-compose-up
