pipeline {
  agent {
    kubernetes {
      //cloud 'kubernetes'
      containerTemplate {
        name 'node-ui-tests'
        image 'node:alpine'
        ttyEnabled true
        command 'cat'
      }
    }
  }
  stages { 
      stage('Test') {
            steps {
                container("node-ui-testss") {
                    sh "npm install"
                    sh "npm run uiTests"
                }
            }
        }
   }
}
