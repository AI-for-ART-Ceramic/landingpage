pipeline {
    agent any

    environment {
        // --- 1. ตั้งค่า Docker --- 
        IMAGE_NAME = 'jeerasakanant/landingpage:latest'

        // --- 2. อ้างอิง Credentials ID ใน Jenkins ---
        DOCKER_CRED_ID = 'docker-hub-login'             // ID ที่เก็บ user/pass docker hub
    }
ป
    stages {
        stage('Build & Push Docker') {
            steps {
                script {
                    // Login Docker Hub
                    docker.withRegistry('https://index.docker.io/v1/', "${DOCKER_CRED_ID}") {
                        echo '🔨 Building Docker Image...'
                        def app = docker.build("${IMAGE_NAME}")
                        
                        echo 'Pushing to Docker Hub...'
                        app.push()
                    }
                }
            }
        }
    }
}