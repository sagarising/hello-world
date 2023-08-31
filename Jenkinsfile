pipeline {
    agent any

    stages {
        stage('Install Dependenices') {
            steps {
                sh 'npm version'
            }
        }
        stage('Test') {
            steps {
                echo 'npx cypress run'
            }
        }
        stage('Deploy') {
            steps {
                echo 'terraform apply --auto-approve'
            }
        }
    }
}
