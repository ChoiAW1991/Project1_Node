pipeline {
environment {
    registry = 'choiaw1991/project_1_node'
    registryCredential = 'dockerhub'
    dockerImage = ''
  } 
  agent any 
  stages {
   stage('Cloning Git') {
      steps {
        git([url:  'https://github.com/ChoiAW1991/Project1_Node', branch: 'main', credentialsId: ''])
      }
    }

    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build registry + ":$BUILD_NUMBER"
        }
      }
    }

    stage('Deploy Image') {
      steps{
        script {
          docker.withRegistry( '', registryCredential ) {
             dockerImage.push()
          }
        }
      }
    }

  }
}
