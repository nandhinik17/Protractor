pipeline {
    agent any  // Replace with appropriate agent definition (e.g., specific node with Docker installed)

    stages {
        stage('Checkout') {
            steps {
                // Checkout code from Git repository
                git url: 'https://github.com/nandhinik17/Protractor'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image from Dockerfile (assuming Dockerfile is present in the repository)
                    docker.build('.')  // Build from current directory (adjust path if needed)
                }
            }
        }

        stage('Run Protractor Tests') {
            steps {
                script {
                    // Run Protractor tests inside Docker container
                    docker.image('protractor-image').inside {  // Use the built image name
                        sh 'protractor conf/conf.js'   // Run the command within the container
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