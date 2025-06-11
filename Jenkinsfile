pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install --unsafe-perm'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'chmod +x node_modules/.bin/jest'
                sh 'npx jest --coverage'
            }
        }
        stage('SonarQube Analysis') {
            environment {
                SONAR_SCANNER_HOME = tool 'SonarScanner'
            }
            steps {
                withSonarQubeEnv('MySonarQubeServer') {
                    sh "${env.SONAR_SCANNER_HOME}/bin/sonar-scanner"
                }
            }
        }
        stage('Quality Gate') {
            steps {
                timeout(time: 1, unit: 'MINUTES') {
                    waitForQualityGate abortPipeline: true
                }
            }
        }
    }
}

