pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master', url: 'https://github.com/nandhinik17/Protractor/' // Assuming 'master' is the branch containing your project code
            }
        }
        stage('Build Image') {
            steps {
                sh 'docker build -t protractor-test-image .' // Build the image from the Dockerfile in the workspace
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    docker.image('protractor-test-image').inside() { // No need to specify "app" as the Dockerfile sets the working directory
                        sh 'npm install'
                        sh 'npm test' // Run your tests
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