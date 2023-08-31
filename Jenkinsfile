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
		sh 'git clone git@github.com:sagarising/hello-world-test.git; cd hello-world-test;
                sh 'npx cypress run'
            }
        }
        stage('Deploy') {
            steps {
                echo 'terraform apply --auto-approve'
            }
        }
    }
}
