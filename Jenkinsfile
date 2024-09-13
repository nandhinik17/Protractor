pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/nandhinik17/Protractor' // Ensure the URL is correct and accessible
            }
        }
        stage('Build Image') {
            steps {
                script {
                    // Ensure Docker is available and you have permission to build images
                    sh 'docker build -t protractor-test-image .' // Build the image from the Dockerfile in the workspace
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Ensure the image name matches the one used in the Build Image stage
                    docker.image('protractor-test-image').inside() {
                        // Install dependencies and run tests inside the Docker container
                        sh 'npm install'
                        sh 'npm test'
                    }
                }
            }
        }
    }

    post {
        always {
            // Clean workspace to ensure no leftover files affect future builds
            cleanWs()
        }
    }
}
