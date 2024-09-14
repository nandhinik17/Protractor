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
                    docker.build('selenium/standalone-chrome:latest')  // Tag the image with 'protractor-image'
                    bat 'protractor --version'
                    bat 'node -v'
                    bat 'npm -v'
                    bat 'protractor conf/conf.js'
                }
            }
        }

        // stage('Run Protractor Tests') {
        //     steps {
        //         script {
        //            // Run Protractor tests inside Docker container
        //            docker.image('selenium/standalone-chrome:latest').inside {
        //                 // Use bat for Windows commands
        //                 bat 'protractor conf/conf.js'
        //             }
        //         }
        //     }
        // }
    }

    post {
        always {
            // Clean up Docker images after the   build
            bat 'docker system prune -f'
        }
    }
}
