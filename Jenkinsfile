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
                    docker.build('protractor-image', '.')
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    docker.image('protractor-image').inside {
                        sh 'protractor conf/protractor.conf.js'
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
