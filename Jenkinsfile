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
                container("node-ui-tests") {
                    sh "npm install --verbose"
                    sh "npm run uiTests --verbose"
                }
            }
        }
   }
}
