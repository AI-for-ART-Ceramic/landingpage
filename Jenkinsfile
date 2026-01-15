pipeline {
    agent any

    environment {
        // Define environment variables if needed
        CI = 'true'
    }
    stages {
        stage('Install Dependencies') {
            agent {
                docker {
                    image 'node:20-alpine'
                    args '-u root:root'
                }
            }
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint') {
            agent {
                docker {
                    image 'node:20-alpine'
                    args '-u root:root'
                }
            }
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build Next.js') {
            agent {
                docker {
                    image 'node:20-alpine'
                    args '-u root:root'
                }
            }
            steps {
                sh 'npm run build'
            }
        }

        stage('Docker Build') {
            steps {
                // Building the production image using the Dockerfile
                sh 'docker build . -t landing-page:latest'
            }
        }
    }
}
