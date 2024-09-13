pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Build Docker Image') {
            steps {
                script {
                    // Build the Docker image
                    docker.build('protractor-image')
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Use Docker container with Unix-style paths
                    docker.image('protractor-image').inside('-w \app') {
                        sh 'npm test' // Use 'sh' for Unix commands
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
