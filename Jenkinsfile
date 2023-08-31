pipeline {
    agent any

    stages {
        stage('Install Dependenices') {
            steps {
                echo 'npm install'
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
