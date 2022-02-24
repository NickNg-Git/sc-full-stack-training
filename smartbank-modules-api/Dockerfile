FROM openjdk:8-jdk-alpine
EXPOSE 8080
ARG JAR_FILE=smart-bank-api.jar
COPY ${JAR_FILE} application.jar
ENTRYPOINT ["java", "-jar", "application.jar"]