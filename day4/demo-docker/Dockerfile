FROM openjdk:8-jdk-alpine
EXPOSE 8080
ARG JAR_FILE=demo-docker-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} application.jar
ENTRYPOINT ["java", "-jar", "application.jar"]