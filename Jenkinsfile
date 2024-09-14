pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from Git
                git url: 'https://github.com/nandhinik17/Protractor'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image
                    docker.build('protractor-image')
                }
            }
        }
        
        stage('Run Protractor Tests') {
            steps {
                script {
                    // Run Protractor tests inside Docker container
                    docker.image('protractor-image').inside {
                        sh 'protractor conf/conf.js'
                    }
                }
            }
        }
    }
    
    post {
        always {
            // Clean up Docker images after the build
            sh 'docker system prune -f'
        }
    }
}
