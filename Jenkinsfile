
ipeline {
    agent any

    stages {
        stage('Install Dependenices') {
            steps {
                echo 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm version'
            }
        }
        stage('Deploy') {
            steps {
                echo 'terraform apply --auto-approve'
            }
        }
    }
}
