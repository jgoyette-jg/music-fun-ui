pipeline {
    agent any

    stages {
        stage('Test') {
            steps {
                withDockerContainer("node:alpine") {
                    sh "npm install"
                    sh "npm run uiTests"
                }
            }
        }
    }
}