pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    docker.image('selenium/standalone-chrome:latest').inside('-v /app:/app -w /app') {
                        bat 'npm install'
                        bat 'npm test' // Run your tests
                    }
                }
            }
        }
    }

    post {
        always {
            cleanWs()
        }
    }
}
