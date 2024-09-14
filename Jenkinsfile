pipeline {
    agent any  // Use a specific agent if needed; 'any' uses any available agent with Docker

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from Git repository
                git branch: 'main', url: 'https://github.com/nandhinik17/Protractor'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image from Dockerfile
                    docker.build('protractor-selenium')  // Tag the image with 'protractor-image'
                }
            }
        }

        stage('Run Protractor Tests') {
            steps {
                script {
                   // Run Protractor tests inside Docker container
                   docker.image('protractor-selenium').inside {
                        // Use bat for Windows commands
                        sh 'protractor conf/conf.js'
                    }
                }
            }
        }
    }

    post {
        always {
            // Clean up Docker images after the   build
            sh 'docker system prune -f'
        }
    }
}
